export const toggleIsEdit =  {
  type: 'TOGGLE_IS_EDIT',
}

export const showEditDetails = (id, content) => ({
  type: 'SHOW_EDIT_DETAILS',
  payload: {
    id: id,
    content: content,
  }
})