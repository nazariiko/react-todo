const initialState = {
  items: [],
};

const tasks = (state = initialState, action) => {
  let currentTasks;

  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        items: action.payload,
      };

    case 'ADD_TASK':
      currentTasks = [...state.items];
      currentTasks.push(action.payload);
      return {
        ...state,
        items: currentTasks,
      };

    case 'MINUS_TASK':
      currentTasks = [...state.items].filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: currentTasks,
      };

    case 'UPDATE_TASK':
      currentTasks = [...state.items].map((item) => {
        if (item.id === action.payload.id) {
          item.content = action.payload.content.content;
        }
        return item;
      });

      return {
        ...state,
        items: currentTasks,
      };

    default:
      return state;
  }
};

export default tasks;
