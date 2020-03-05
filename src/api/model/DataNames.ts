import dataNames from '../data/data-names.json'
import DataNamesGroup from './DataNamesGroup'
import DataNamesProduct from './DataNamesProduct'

interface ProductNodeInfo {
  /** Product Name */
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  N: string
}

interface IProductNode {
  [id: string]: ProductNodeInfo
}

interface GroupNodeInfo {
  /** Group Name */
  G: string
  /** Products */
  B: IProductNode
}

interface IDataNames {
  [id: string]: GroupNodeInfo
}

export default class DataNames {
  groups: DataNamesGroup[]
  products: DataNamesProduct[]

  constructor() {
    this.groups = []
    this.products = []

    Object.getOwnPropertyNames(dataNames).forEach(groupId => {
      const gni: GroupNodeInfo = (dataNames as IDataNames)[groupId]
      const dataNameGroup = new DataNamesGroup(groupId, gni.G)
      this.groups.push(dataNameGroup)

      const groupProductNode = gni.B as IProductNode
      Object.getOwnPropertyNames(groupProductNode).forEach(productId => {
        const pni: ProductNodeInfo = groupProductNode[productId]
        const dataNamesProduct = new DataNamesProduct(productId, pni.N)
        this.products.push(dataNamesProduct)
      })
    })
  }
}
