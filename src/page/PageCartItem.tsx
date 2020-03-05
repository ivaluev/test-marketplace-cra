/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { List, Label } from 'semantic-ui-react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { CartItem } from '../api/model/CartItem'
import { formatAsCurrency, trunc } from '../utils/ext'
import { State } from '../state/reducer'

type Props = {
  item: CartItem
  remove: (id: number) => void
}

export default function PageCartItem({ item, remove }: Props) {
  const rate = useSelector((state: State) => state.rate)

  return (
    <List.Item style={{ paddingTop: '1em' }}>
      {/* <Image circular avatar src="/images/square-image.png" verticalAlign="middle" /> */}
      <List.Icon name="cart arrow down" color="olive" size="large" verticalAlign="middle" />
      <List.Content>
        <ItemHeader>{trunc(item.name, 30, true)}</ItemHeader>
        <List.Description style={{ paddingTop: '0.5em' }}>
          <RemoveLink href="##" onClick={() => remove(item.id)}>remove</RemoveLink>
          <span style={{ float: 'right' }}>
            {item.quantity}x&nbsp;<Pricelabel size="small">{formatAsCurrency(item.priceUsd * rate)}</Pricelabel>
          </span>
        </List.Description>
      </List.Content>
    </List.Item>
  )
}

const ItemHeader = styled(List.Header)`
  font-size: 13px;
`

const RemoveLink = styled.a`
  display: inline-block;
  margin-top: 3px;
`
const Pricelabel = styled(Label)`
  min-width: 102px;
  text-align: right;
`
