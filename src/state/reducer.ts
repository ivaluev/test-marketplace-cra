import { createReducer } from 'deox'
import DataNamesGroup from '../api/model/DataNamesGroup'
import DataProduct from '../api/model/DataProduct'
import { CartItem } from '../api/model/CartItem'
import { fetchProducts, categoryChangeAction, cartAddAction, cartRemoveAction, rateChange, productNameChange } from './actions'

export interface State {
  loading: boolean
  error: string
  rate: number
  isRateIncrease: boolean
  category: number
  products: DataProduct[]
  groups: DataNamesGroup[]
  cart: CartItem[]
}

export const initialState: State = {
  loading: false,
  error: '',
  rate: 63,
  isRateIncrease: false,
  category: 0,
  products: [],
  groups: [],
  cart: []
}

export const rootReducer = createReducer(initialState, handleAction => [

  handleAction(fetchProducts.next, state => ({
    ...state,
    loading: true
  })),

  handleAction(fetchProducts.complete, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  })),

  handleAction(fetchProducts.error, (state, { payload }) => ({
    ...state,
    error: payload
  })),

  handleAction(categoryChangeAction, (state, { payload }) => ({
    ...state,
    category: payload
  })),

  handleAction(rateChange, (state, { payload }) => ({
    ...state,
    isRateIncrease: payload > state.rate,
    rate: payload
  })),

  handleAction(cartAddAction, (state, { payload }) => {
    const cartNew = [...state.cart]
    const cartItem = cartNew.find(i => i.id === payload.id)
    if (cartItem) {
      cartItem.quantity = (cartItem.quantity || 0) + 1
    } else {
      cartNew.push(new CartItem(payload, 1))
    }
    return { ...state, cart: cartNew }
  }),

  handleAction(cartRemoveAction, (state, { payload }) => {
    let cartNew = [...state.cart]
    const cartItem = cartNew.find(i => i.id === payload)
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity = --cartItem.quantity
    } else {
      cartNew = cartNew.filter(i => i.id !== payload)
    }
    return { ...state, cart: cartNew }
  }),

  handleAction(productNameChange, (state, { payload }) => {
    const productsUpdated = [...state.products]
    const product = productsUpdated.find(p => p.id === payload.id)
    if (product) product.name = payload.name
    return { ...state, products: productsUpdated }
  })
])
