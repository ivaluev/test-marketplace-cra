/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { Button, Modal, Icon, Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { ChildrenProps } from '../utils/props'
import { productNameChange } from '../state/actions'

type Props = {
  id: number
  name: string
}

const PageProductsItemEditor = ({ id, name, children }: Props & ChildrenProps) => {
  const [open, setOpen] = useState(false)
  const [nameNew, setNameNew] = useState(name)
  const dispatch = useDispatch()
  const close = () => setOpen(false)
  const save = () => {
    dispatch(productNameChange(id, nameNew))
    close()
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any, { value }: any) => {
    setNameNew(value)
  }

  return (
    <Modal
      trigger={children}
      size="small"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={close}
      dimmer="inverted"
    >
      <Modal.Header>Edit Product</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Name"
            placeholder="enter name"
            value={nameNew || ''}
            onChange={handleChange}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={close}>
          {' '}
          Cancel
        </Button>
        <Button color="green" onClick={save}>
          <Icon name="checkmark" />
          {' '}
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default PageProductsItemEditor
