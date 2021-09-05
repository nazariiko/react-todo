import { combineReducers } from 'redux'

import folders from './folders'
import tasks from './tasks'
import filter from './filter'

const rootReducer = combineReducers({
  folders,
  tasks,
  filter,
});

export default rootReducer;