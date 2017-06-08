import C from './constants'
import fetch from 'isomorphic-fetch'

export function addDay (title, date, finished = false, fiction = false) {
  return {
    type: C.ADD_DAY,
    payload: {title, date, finished, fiction}
  }
}

export const removeDay = function (date) {
  return {
    type: C.REMOVE_DAY,
    payload: date
  }
}

export const setGoal = (goal) =>
    ({
      type: C.SET_GOAL,
      payload: goal
    })

export const addError = (message) =>
   ({
     type: C.ADD_ERROR,
     payload: message
   })

export const clearError = index =>
    ({
      type: C.CLEAR_ERROR,
      payload: index
    })

export const changeSuggestions = suggestions =>
  ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestions
  })

export const clearSuggestions = () =>
    ({
      type: C.CLEAR_SUGGESTIONS
    })

export const suggestBookTitles = value => dispatch => {
  dispatch({
    type: C.FETCH_BOOK_TITLES
  })

  fetch('http://localhost:3333/titles/' + value)
    .then(response => response.json())
    .then(suggestions => {
      dispatch({
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
      })
    })
    .catch(error => {
      dispatch(
        addError(error.message)
      )

      dispatch({
        type: C.CANCEL_FETCHING
      })
    })
}
