import styled from '@emotion/styled'
import { Sticky } from 'semantic-ui-react'

export const ColumnRightRoot = styled.div`
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: inherit;
  margin-left: 250px;
  min-width: 550px;
  background-color: #fafafa;
`

export const ColumnRightContainer = styled.div`
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: inherit;
  display: block;
  position: relative;
  padding: 2em 0em 7em;
  margin-left: 3em !important;
  width: auto !important;
  max-width: 960px !important;
  margin-right: 387px !important;
`

export const ColRightContents = styled.div`
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: inherit;
  display: block;
  position: relative;
`

export const RailSticky = styled(Sticky)`
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
  box-sizing: inherit;
  position: static;
  transition: none;
  z-index: 800;
  padding-bottom: 2em;
  left: 1122px;
  width: 283px !important;
  height: 424px !important;
  & .ui.fixed.top.sticky {
    margin-top: 2em;
  }
`
