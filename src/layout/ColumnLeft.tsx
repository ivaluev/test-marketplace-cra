import React from 'react'
import styled from '@emotion/styled'
import { ChildrenProps } from '../utils/props'

export default function ColumnLeft({ children }: ChildrenProps) {
  return (
    <ColumnLeftWrapper>
      <ColumnLeftScroller>{children}</ColumnLeftScroller>
    </ColumnLeftWrapper>
  )
}

const ColumnLeftScroller = styled.div`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: inherit;
  flex: 1;
  overflow-y: scroll;
`

const ColumnLeftWrapper = styled.div`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: inherit;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  background: #1b1c1d;
  overflow-x: hidden;
  flex: 1;
`
