/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Item, Button, Icon, Label } from 'semantic-ui-react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import DataProduct from '../api/model/DataProduct'
import { cartAddAction } from '../state/actions'
import { formatAsCurrency } from '../utils/ext'
import { State } from '../state/reducer'
import PageProductsItemEditor from './PageProductsItemEditor'

type Props = {
  product: DataProduct
}

function getColor() {
  return Math.random() > 0.8 ? 'red' : undefined
}

export default function PageContentItem({ product }: Props) {
  const [rate, isRateIncrease] = useSelector((state: State) => [state.rate, state.isRateIncrease])
  const dispatch = useDispatch()

  function toCart() {
    dispatch(cartAddAction(product))
  }

  return (
    <Item>
      <Item.Image
        size="small"
        src="/images/image.png"
        label={{
          as: 'a',
          corner: 'left',
          icon: 'heart',
          color: getColor()
        }}
      />
      <Item.Content>
        <PageProductsItemEditor id={product.id} name={product.name}>
          <Item.Header as="a">{product.name}</Item.Header>
        </PageProductsItemEditor>
        <Item.Meta>
          <a>{product.date}</a>
          <a>{product.groupName}</a>
        </Item.Meta>
        <Item.Description>{product.description}</Item.Description>
        <Item.Extra>
          {/* <Image circular avatar src="/images/square-image.png" /> Username */}
          <Button primary floated="right" onClick={toCart}>
            To Cart
            <Icon name="chevron right" />
          </Button>
          <LabelIndented tag color={isRateIncrease ? 'pink' : 'green'}>
            {formatAsCurrency(product.priceUsd * rate)}
          </LabelIndented>
          {product.leftOver < 3 && <Label color="orange">Limited</Label>}
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

const LabelIndented = styled(Label)`
  margin-left: 15px !important;
`
