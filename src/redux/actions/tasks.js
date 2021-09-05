import axios from 'axios';

export const fetchTasks = (activeFolderName) => (dispatch) => {
  console.log(activeFolderName);
  axios.get(`/tasks${activeFolderName === 'All' ? '' : `?folder.name=${activeFolderName}`}`).then(({ data }) => {
    dispatch(setTasks(data));
  });
};

export const setTasks = (items) => ({
  type: 'SET_TASKS',
  payload: items,
});
