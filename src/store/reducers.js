import C from '../constants'
import { combineReducers } from 'redux'

export const goal = (state = 10, action) =>
  (action.type === C.SET_GOAL)
     ? parseInt(action.payload)
     : state

export const readDay = (state = null, action) =>
  (action.type === C.ADD_DAY)
    ? action.payload
    : state

export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
    case C.CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload)
    default:
      return state
  }
}

export const allReadDays = (state = [], action) => {
  switch (action.type) {

    case C.ADD_DAY :

      const hasDay = state.some(readDay => readDay.date === action.payload.date)

      return (hasDay)
        ? state
        : [
          ...state,
          readDay(null, action)
        ].sort((a, b) => new Date(b.date) - new Date(a.date))

    case C.REMOVE_DAY :

      return state.filter(readDay => readDay.date !== action.payload)

    default:
      return state
  }
}

export const fetching = (state = false, action) => {
  switch (action.type) {

    case C.FETCH_BOOK_TITLES :
      return true

    case C.CANCEL_FETCHING :
      return false

    case C.CHANGE_SUGGESTIONS :
      return false

    default:
      return state
  }
}

export const suggestions = (state = [], action) => {
  switch (action.type) {

    case C.CLEAR_SUGGESTIONS :
      return []

    case C.CHANGE_SUGGESTIONS :
      return action.payload

    default :
      return state
  }
}

export default combineReducers({
  allReadDays,
  goal,
  errors,
  bookTitles: combineReducers({
    fetching,
    suggestions
  })
})
