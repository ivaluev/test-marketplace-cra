import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import styled from '@emotion/styled'

export default function PageSearch() {
  const [searchLocal, setSearchLocal] = useState('')
  const [searchIsActive, setSearchIsActive] = useState(false)

  return (
    <SearchContainer style={{ backgroundColor: searchIsActive ? '#F2F2F2' : '' }}>
      <SearchIcon>
        <Icon size="large" name="search" color={searchIsActive ? 'blue' : 'grey'} />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Search any product...  (not less than 2 characters)"
        value={searchLocal || ''}
        onChange={e => setSearchLocal(e.target.value)}
        onFocus={() => setSearchIsActive(true)}
        onBlur={() => setSearchIsActive(false)}
      />
      {searchLocal && searchLocal.length && (
        <IconClose
          name="close"
          size="large"
          onClick={() => setSearchLocal('')}
        />
      )}
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  /* background-color: whitesmoke; */
`

const SearchIcon = styled.div`
  /* width: 35px !important;
  height: 35px !important; */
  margin-right: 10px;
  margin-left: 10px;
`

const IconClose = styled(Icon)`
  margin-right: 15px !important;
  margin-left: 18px;
  color: #a89898ad;
  cursor: pointer;
  &:hover {
    color: #eb5558;
  }
`

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  width: 100%;
  height: 48px;
  padding-left: 5px;
  background-color: transparent;
  &:focus {
    outline-width: 0;
  }
`
