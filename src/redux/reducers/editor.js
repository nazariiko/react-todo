const initialState = {
  editor: {},
}

const editor = (state = initialState, action) => {

switch (action.type) {
  case 'EDITOR':
    return {
      editor: action.payload,
    };
  default:
    return state;
}
};

export default editor