const initialState = {
  activeFolderId: null,
  activeFolderName: 'All',
  activeFolderColorName: 'gray',
  activeFolderColorCode: '#E7E7E7',
}

const filter = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_FOLDER_FILTER':
      return {
        ...state,
        activeFolderId: action.payload.id,
        activeFolderName: action.payload.name,
        activeFolderColorName: action.payload.colorName,
        activeFolderColorCode: action.payload.colorCode,
      };
    default:
      return state;
  }
};

export default filter