export interface ApiDataItem {
  /** USD price */
  C: number
  /** Group Id */
  G: number
  /** Items Left */
  P: number
  /** Item Id */
  T: number
}

export default class DataProduct {
  id: number

  name: string

  description: string

  priceUsd: number

  groupId: number

  groupName: string

  leftOver: number

  date: string

  constructor(adi: ApiDataItem) {
    this.id = adi.T
    this.groupId = adi.G
    this.leftOver = adi.P
    this.priceUsd = adi.C

    this.name = `Product ${this.id}`
    this.date = '2019-09-30'
    // this.date = randomDate(new Date(2019, 0, 1), new Date()).toLocaleDateString()
    this.groupName = `Category ${this.groupId}`
    this.description = `description for ${this.name}`
  }
}
