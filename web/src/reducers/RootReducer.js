import { combineReducers } from 'redux'

import Immutable from 'seamless-immutable'

import ReminderReducer from 'reducers/ReminderReducer'

const reminderApp = combineReducers({
  ReminderReducer
})

export default reminderApp
