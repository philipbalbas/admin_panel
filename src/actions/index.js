import C from './types'

export const sendSignedUpToday = users => ({
  type: C.SEND_DATA_TODAY,
  payload: users
})

export const sendSignedUpThisMonth = users => ({
  type: C.SEND_DATA_MONTH,
  payload: users
})
