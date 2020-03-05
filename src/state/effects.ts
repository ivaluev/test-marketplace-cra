import { call, put, all, takeLatest } from 'redux-saga/effects'
import { ActionType, getType } from 'deox'
import { fetchProducts } from './actions'
import { getProducts } from '../api/api'

export function* fetchProductsSaga(_action: ActionType<typeof fetchProducts.next>) {
  try {
    const { products, groups } = yield call(getProducts)
    yield put(fetchProducts.complete(products, groups))
  } catch (error) {
    yield put(fetchProducts.error(error))
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(getType(fetchProducts.next), fetchProductsSaga)
    // takeLatest(getType(addProduct.next), addProductSaga)
  ])
}
