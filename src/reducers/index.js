import { combineReducers } from 'redux'
import dateFns from 'date-fns'

import C from '../actions/types'

const signedUpToday = (state = 0, action) => {
  if (action.type === C.SEND_DATA_TODAY) {
    const result = action.payload.filter(user => {
      return dateFns.isToday(user.joinDate)
    }).length
    return result
  }
  return state
}

const signedUpThisMonth = (state = 0, action) => {
  if (action.type === C.SEND_DATA_MONTH) {
    console.log(action.payload)
    const result = action.payload.filter(user => {
      return dateFns.isThisMonth(user.joinDate)
    }).length
    console.log(result)
    return result
  }
  return state
}

export default combineReducers({
  signedUpToday,
  signedUpThisMonth
})
