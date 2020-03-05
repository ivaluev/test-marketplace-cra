export default class DataNamesProduct {
  id: number

  name: string

  constructor(id: string, name: string) {
    this.id = parseInt(id, 10)
    this.name = name
  }
}
