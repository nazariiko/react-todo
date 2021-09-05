import axios from 'axios';

export const fetchFolders = () => (dispatch) => {
  axios.get('/folders').then(({ data }) => {
    dispatch(setFolders(data));
  });
};

export const setFolders = (items) => ({
  type: 'SET_FOLDERS',
  payload: items,
});

export const postFolder = (folder) => (dispatch) => {
  axios.post('/folders', folder).then(({ data }) => {
    dispatch(addFolder(data));
  });
};

export const addFolder = (items) => ({
  type: 'ADD_FOLDER',
  payload: items,
});

export const deleteFolder = (id) => (dispatch) => {
  axios.delete(`/folders/${id}`).then(() => {
    dispatch(minusFolder(id));
  });
};

export const minusFolder = (id) => ({
  type: 'MINUS_FOLDER',
  payload: id,
});
