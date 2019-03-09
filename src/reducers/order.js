import {
  GET_ORDER
} from '../actions/order'

const defaultState = {
    orderBy: {
      Votos: true,
      Data: false
    },
}

export default function order(state = defaultState, action) {
  switch(action.type) {
    case GET_ORDER:
      return {
        ...state,
        orderBy: {
            Votos: action.order === 'Votos' ? true : false,
            Data: action.order === 'Data' ? true : false
          }
        }
    default:
      return state
  }
}