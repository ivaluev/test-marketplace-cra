import { createAction } from 'deox'
import DataProduct from '../api/model/DataProduct'
import DataNamesGroup from '../api/model/DataNamesGroup'


export const rateChange = createAction(
  'RATE_CHANGE',
  resolve => (rate: number) => resolve(rate)
)

export const cartAddAction = createAction(
  'CART_ADD',
  resolve => (product: DataProduct) => resolve(product)
)

export const cartRemoveAction = createAction(
  'CART_REMOVE',
  resolve => (id: number) => resolve(id)
)

export const categoryChangeAction = createAction(
  'CATEGORY_CHANGE',
  resolve => (category: number) => resolve(category)
)

export const fetchProducts = {
  next: createAction('PRODUCTS_FETCH_NEXT'),
  complete: createAction(
    'PRODUCTS_FETCH_COMPLETE',
    resolve => (products: DataProduct[], groups: DataNamesGroup[]) => resolve({ products, groups })
  ),
  error: createAction(
    'FETCH_DATA_ERROR',
    resolve => (error: string) => resolve(error)
  )
}

export const addProduct = {
  next: createAction(
    'PRODUCT_ADD_NEXT',
    resolve => (product: DataProduct) => resolve(product)
  ),
  complete: createAction(
    'PRODUCT_ADD_COMPLETE',
    resolve => (product: DataProduct) => resolve(product)
  ),
  error: createAction(
    'PRODUCT_ADD_ERROR',
    resolve => error => resolve(error)
  )
}

export const productNameChange = createAction(
  'PRODUCT_NAME_CHANGE',
  resolve => (id: number, name: string) => resolve({ id, name })
)
