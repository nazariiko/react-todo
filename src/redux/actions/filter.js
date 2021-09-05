export const setFolderFilter = (id, name) => ({
  type: 'SET_FOLDER_FILTER',
  payload: {
    id: id,
    name: name,
  },
})