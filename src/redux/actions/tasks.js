import axios from 'axios';
import {JSON_API } from '../../api';

export const fetchTasks = (activeFolderName) => (dispatch) => {
  axios.get(`${JSON_API}/tasks${activeFolderName === 'All' ? '' : `?folder.name=${activeFolderName}`}`).then(({ data }) => {
    dispatch(setTasks(data));
  });
};

export const setTasks = (items) => ({
  type: 'SET_TASKS',
  payload: items,
});

export const postTask = (task) => (dispatch) => {
  axios.post(`${JSON_API}/tasks`, task).then(({ data }) => {
    dispatch(addTask(data))
  })
}

export const addTask = (data) => ({
  type: 'ADD_TASK',
  payload: data,
})

export const deleteTask = (id) => (dispatch) => {
  axios.delete(`${JSON_API}/tasks/${id}`).then(() => {
    dispatch(minusTask(id));
  });
};

export const minusTask = (id) => ({
  type: 'MINUS_TASK',
  payload: id,
});

export const deleteTasksWithFolder = (id) => {
  axios.delete(`${JSON_API}/tasks?folderId=${id}`)
}

export const patchTask = (id, content) => (dispatch) => {
  axios.patch(`${JSON_API}/tasks/${id}`, content).then(() => {
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




