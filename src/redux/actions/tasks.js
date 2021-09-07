import axios from 'axios';

export const fetchTasks = (activeFolderName) => (dispatch) => {
  axios.get(`/tasks${activeFolderName === 'All' ? '' : `?folder.name=${activeFolderName}`}`).then(({ data }) => {
    dispatch(setTasks(data));
  });
};

export const setTasks = (items) => ({
  type: 'SET_TASKS',
  payload: items,
});

export const postTask = (task) => (dispatch) => {
  axios.post('/tasks', task).then(({ data }) => {
    dispatch(addTask(data))
  })
}

export const addTask = (data) => ({
  type: 'ADD_TASK',
  payload: data,
})

export const deleteTask = (id) => (dispatch) => {
  axios.delete(`/tasks/${id}`).then(() => {
    dispatch(minusTask(id));
  });
};

export const minusTask = (id) => ({
  type: 'MINUS_TASK',
  payload: id,
});

export const deleteTasksWithFolder = (id) => {
  axios.delete(`/tasks?folderId=${id}`)
}

export const patchTask = (id, content) => (dispatch) => {
  axios.patch(`/tasks/${id}`, content).then(() => {
    dispatch(updateTask(id, content));
  });
};

export const updateTask = (id, content) => ({
  type: 'UPDATE_TASK',
  payload: {
    id: id,
    content: content,
  }
});




