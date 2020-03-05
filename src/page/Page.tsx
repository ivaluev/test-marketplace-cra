import React, { useEffect } from 'react'
import { Divider } from 'semantic-ui-react'
import { useToasts } from 'react-toast-notifications'
import { useSelector, useDispatch } from 'react-redux'
import Root from '../layout/Root'
import ColumnLeft from '../layout/ColumnLeft'
import { ColumnRightRoot, ColumnRightContainer, ColRightContents } from '../layout/ColumnRight'
import PageContent from './PageProducts'
import PageCategories from './PageCategories'
import Footer from '../layout/Footer'
import PageCart from './PageCart'
import PageSearch from './PageSearch'
import { useInterval } from '../utils/hooks'
import { State } from '../state/reducer'
import { rateChange } from '../state/actions'
import { getCurrencyRate } from '../api/api'
import { formatAsCurrency } from '../utils/ext'

export default function Page() {
  const { addToast } = useToasts()
  const rate = useSelector((state: State) => state.rate)
  const dispatch = useDispatch()

  useInterval(() => {
    const newRate = getCurrencyRate() // api call
    if (rate !== newRate) {
      dispatch(rateChange(newRate))
    }
  }, 15000)

  useEffect(() => {
    addToast(`Currency Rate Updated: 1 USD -> ${formatAsCurrency(rate)}`, { appearance: 'info' })
  }, [rate])

  return (
    <Root>
      <ColumnLeft>
        <PageCategories />
      </ColumnLeft>
      <ColumnRightRoot>
        <ColumnRightContainer>
          <ColRightContents>
            <PageCart />
            <PageSearch />
            <Divider />
            <PageContent />
          </ColRightContents>
        </ColumnRightContainer>
        <Footer />
      </ColumnRightRoot>
    </Root>
  )
}
