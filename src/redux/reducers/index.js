import { combineReducers } from 'redux'

import folders from './folders'
import tasks from './tasks'
import filter from './filter'
import edit from './edit'
import editor from './editor'

const rootReducer = combineReducers({
  folders,
  tasks,
  filter,
  edit,
  editor,
});

export default rootReducer;