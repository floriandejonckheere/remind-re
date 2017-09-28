import { combineReducers } from 'redux'

import ReminderReducer from 'reducers/ReminderReducer'
import FilterReducer from 'reducers/FilterReducer'

const RootReducer = combineReducers({
  reminders: ReminderReducer,
  filter: FilterReducer,
})

export default RootReducer
