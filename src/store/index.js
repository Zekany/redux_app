import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
  let result

  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('read days', store.getState().allReadDays.length)
  result = next(action)

  let { allReadDays, goal, errors, bookTitles } = store.getState()

  console.log(`

    read days: ${allReadDays.length}
    goal: ${goal}
    fetching: ${bookTitles.fetching}
    suggestions: ${bookTitles.suggestions}
    errors: ${errors.length}

  `)

  console.groupEnd()

  return result
}

export default (initialState = {}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}
