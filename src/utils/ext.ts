export function trunc(str: string, limit: number, useDots?: boolean): string {
  return str.length > limit ? str.substr(0, limit - 1) + (useDots ? '...' : '&hellip;') : str.toString()
}

export function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUR'
})

export function formatAsCurrency(amount: number): string {
  return formatter.format(amount)
}
