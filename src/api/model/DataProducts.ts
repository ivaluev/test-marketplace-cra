import data from '../data/data.json'
import DataProduct, { ApiDataItem } from './DataProduct'

export default class DataProducts {
  products: DataProduct[]

  constructor() {
    this.products = data.Value.Goods.map((g: ApiDataItem) => new DataProduct(g))
  }
}
