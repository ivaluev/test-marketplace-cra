import React from 'react'
import { Menu, Image, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { State } from '../state/reducer'
import { categoryChangeAction } from '../state/actions'
import DataNamesGroup from '../api/model/DataNamesGroup'

const defaultGroupId = 0

type Props = {
  groups: DataNamesGroup[]
  category: number
  changeCategory: (id: number) => void
}

function PageCategories({ groups, category, changeCategory }: Props) {
  const onClick = (id: number) => {
    if (category === id) {
      changeCategory(defaultGroupId)
    } else {
      changeCategory(id)
    }
  }

  return (
    <Menu borderless vertical compact fluid inverted>
      <Menu.Item>
        <Image src="/logo192.png" size="mini" spaced />
        <strong>NAKUKOP TEST APP</strong>
      </Menu.Item>
      <Menu.Item>
        <Header inverted>Категории</Header>
        <Menu.Menu>
          {groups.map(g => (
            <Menu.Item
              key={g.id}
              onClick={() => onClick(g.id)}
              active={category === g.id}
              as="a"
            >
              {g.name}
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  )
}

function mapStateToProps(state: State) {
  const { groups, category } = state
  return { groups, category }
}

const mapDispatchToProps = {
  changeCategory: categoryChangeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCategories)
