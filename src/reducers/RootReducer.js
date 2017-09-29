import { combineReducers } from 'redux'

import ReminderReducer from 'reducers/ReminderReducer'
import FilterReducer from 'reducers/FilterReducer'
import LabelReducer from 'reducers/LabelReducer'

const RootReducer = combineReducers({
  reminders: ReminderReducer,
  labels: LabelReducer,
  filter: FilterReducer,
})

export default RootReducer
