import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFolders, deleteFolder } from '../redux/actions/folders';
import { deleteTasksWithFolder } from '../redux/actions/tasks'

import { setFolderFilter } from '../redux/actions/filter';

import FolderItem from './FolderItem';

function FoldersList() {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.folders.items);
  const activeFolderId = useSelector(state => state.filter.activeFolderId)

  const handleSetactiveFolder = (id, name, colorName, colorCode) => {
    if (activeFolderId !== id) {
      dispatch(setFolderFilter(id, name, colorName, colorCode));
    }
  };

  const handleDeleteFolder = (id) => {
    dispatch(deleteFolder(id));
    deleteTasksWithFolder(id);
    dispatch(setFolderFilter(null, 'All', 'gray', '#E7E7E7'));
  };

  React.useEffect(() => {
    dispatch(fetchFolders());
  }, []);

  return (
    <ul className="folders-list">
      {Boolean(folders.length) &&
        folders.map((folder) => (
          <FolderItem
            {...folder}
            key={folder.id}
            activeFolderId={folder.id === activeFolderId}
            onClick={handleSetactiveFolder}
            onClickDeleteFolder={handleDeleteFolder}
          />
        ))}

      <FolderItem
        id={null}
        name={'All'}
        colorName={'gray'}
        onClick={handleSetactiveFolder}
        activeFolderId={activeFolderId === null}
      />
    </ul>
  );
}

export default FoldersList;
