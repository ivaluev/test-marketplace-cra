import DataProduct from './DataProduct'

export class CartItem {
  id: number
  name: string
  quantity: number
  priceUsd: number

  /**
   *
   */
  constructor(product: DataProduct, quantity: number) {
    this.id = product.id
    this.name = product.name
    this.quantity = quantity
    this.priceUsd = product.priceUsd
  }
}
