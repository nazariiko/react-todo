const initialState = {
  isEdit: false,
  editTaskId: null,
  editTaskContent: [],
}

const edit = (state=initialState, action) => {

  switch (action.type) {
    case 'TOGGLE_IS_EDIT':
      return {
        ...state,
        isEdit: !state.isEdit,
      }

    case 'SHOW_EDIT_DETAILS':
      return {
        ...state,
        editTaskId: action.payload.id,
        editTaskContent: action.payload.content,
      }

    case 'EDIT_TASK':
      return state
    
    default:
      return state
  }
}

export default edit