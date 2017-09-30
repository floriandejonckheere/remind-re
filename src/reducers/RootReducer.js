import { combineReducers } from 'redux'

import ReminderReducer from 'reducers/ReminderReducer'
import FilterReducer from 'reducers/FilterReducer'
import LabelReducer from 'reducers/LabelReducer'
import AppReducer from 'reducers/AppReducer'

const RootReducer = combineReducers({
  reminders: ReminderReducer,
  labels: LabelReducer,
  filter: FilterReducer,
  app: AppReducer,
})

export default RootReducer
