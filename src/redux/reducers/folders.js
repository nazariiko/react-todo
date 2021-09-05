const initialState = {
  items: [],
};

const folders = (state = initialState, action) => {
  let currentFolders

  switch (action.type) {
    case 'SET_FOLDERS':
      return {
        ...state,
        items: action.payload,
      };

    case 'ADD_FOLDER':
      currentFolders = [...state.items];
      currentFolders.push(action.payload);
      return {
        ...state,
        items: currentFolders,
      };

    case 'MINUS_FOLDER':
      currentFolders = [...state.items].filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: currentFolders,
      };

    default:
      return state;
  }
};

export default folders;
