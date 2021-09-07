export const setFolderFilter = (id, name, colorName, colorCode) => ({
  type: 'SET_FOLDER_FILTER',
  payload: {
    id: id,
    name: name,
    colorName: colorName,
    colorCode: colorCode,
  },
})