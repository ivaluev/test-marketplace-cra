/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Rail, Header, List, Divider, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { RailSticky } from '../layout/ColumnRight'
import PageCartItem from './PageCartItem'
import { State } from '../state/reducer'
import { cartRemoveAction } from '../state/actions'
import { CartItem } from '../api/model/CartItem'
import { formatAsCurrency } from '../utils/ext'

type Props = {
  rate: number
  cart: CartItem[]
  remove: (id: number) => void
}

function PageCart({ cart, remove, rate }: Props) {
  const items = cart.map(ci => <PageCartItem key={ci.id} item={ci} remove={remove} />)
  const total: number = cart.reduce((result, next) => result + (next.priceUsd * next.quantity), 0) * rate

  return (
    <Rail dividing position="right">
      <RailSticky>
        <Header as="h4" dividing style={{ marginBottom: '0' }}>Cart</Header>
        <List divided relaxed style={{ marginTop: '0' }}>
          {items}
        </List>
        {items.length > 0 && (
        <div>
          <Divider />
          <div>
            Total:
            {' '}
            <Total>{formatAsCurrency(total)}</Total>
          </div>
          <Divider />
          <Button floated="right" color="olive">To Checkout</Button>
        </div>
        )}
      </RailSticky>
    </Rail>
  )
}

const mapStateToProps = (state: State) => {
  const { cart, rate } = state
  return { cart, rate }
}

const mapDispatchToProps = {
  remove: cartRemoveAction
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCart)


const Total = styled.span`
  float: right;
  font-size: 13px;
  font-weight: bold;
`
