import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFolders, deleteFolder } from '../redux/actions/folders';

import { setFolderFilter } from '../redux/actions/filter';

import FolderItem from './FolderItem';

function FoldersList() {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.folders.items);
  const activeFolderId = useSelector(state => state.filter.activeFolderId)

  const handleSetactiveFolderId = (id, name) => {
    if (activeFolderId !== id) {
      dispatch(setFolderFilter(id, name));
    }
  };

  const handleDeleteFolder = (id) => {
    dispatch(deleteFolder(id));
    dispatch(setFolderFilter(null, 'All'));
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
            onClick={handleSetactiveFolderId}
            onClickDeleteFolder={handleDeleteFolder}
          />
        ))}

      <FolderItem
        id={null}
        name={'All'}
        colorName={'gray'}
        onClick={handleSetactiveFolderId}
        activeFolderId={activeFolderId === null}
      />
    </ul>
  );
}

export default FoldersList;
