export const GET_ORDER = 'GET_ORDER'

export function setOrder (order) {
  return {
    type: GET_ORDER,
    order
  }
}