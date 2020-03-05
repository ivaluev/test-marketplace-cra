/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import PageContentItem from './PageProductsItem'
import { State } from '../state/reducer'
import { fetchProducts } from '../state/actions'
import { Loading } from '../layout/Loading'
import DataProduct from '../api/model/DataProduct'

type Props = {
  loading: boolean
  products: DataProduct[]
  fetch: () => void
}

function PageContent({ loading, products, fetch }: Props) {
  useEffect(() => {
    fetch()
  }, [])

  if (loading) return <Wrapper><Loading loading={loading} /></Wrapper>

  return (
    <Item.Group relaxed divided>
      {products.map(i => (
        <PageContentItem key={i.id} product={i} />
      ))}
    </Item.Group>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`

function mapStateToProps(state: State) {
  const { loading, products, category } = state
  const filteredProducts = category ? products.filter(p => p.groupId === category) : products
  return { loading, products: filteredProducts }
}

const mapDispatchToProps = {
  fetch: fetchProducts.next
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContent)
