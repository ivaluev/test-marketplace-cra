/* eslint-disable no-param-reassign */
import DataNames from './model/DataNames'
import DataProduct from './model/DataProduct'
import DataProducts from './model/DataProducts'
import DataNamesGroup from './model/DataNamesGroup'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export interface GetProductsData {
  products: DataProduct[]
  groups: DataNamesGroup[]
}

export async function getProducts(): Promise<GetProductsData> {
  await delay(800)

  const { products } = new DataProducts()
  const { groups, products: namedProducts } = new DataNames()

  products.forEach(p => {
    const np = namedProducts.find(i => i.id === p.id)
    if (np) p.name = np.name

    const gr = groups.find(g => g.id === p.groupId)
    if (gr) p.groupName = gr.name
  })

  return { products, groups }
}

export function getCurrencyRate() {
  const min = 20
  const max = 80

  return min + (Math.random() * (max - min))
}
