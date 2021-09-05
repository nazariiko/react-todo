const initialState = {
  activeFolderId: null,
  activeFolderName: 'All',
}

const filter = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_FOLDER_FILTER':
      console.log(action.payload.name);
      return {
        ...state,
        activeFolderId: action.payload.id,
        activeFolderName: action.payload.name,
      };
    default:
      return state;
  }
};

export default filter