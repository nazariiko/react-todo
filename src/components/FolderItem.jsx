import React from 'react';
import classNames from 'classnames';

import deleteIcon from '../assets/images/delete.svg';

function FolderItem({ id, name, colorName, activeFolderId, onClick, onClickDeleteFolder }) {

  const formatName = (name) => {
    if (name.length > 18) {
      let formatedName = name.slice(0, 18) + '..'
      return formatedName
    } 
    return name
  }

  return (
    <li
      onClick={() => onClick(id, name)}
      className={classNames('folders-list__item', {
        'active-folder': activeFolderId,
      })}>
      <div className={classNames('folder-list__item_colored-label', colorName)}></div>
      {formatName(name)}
      <img
        onClick={() => onClickDeleteFolder(id)}
        src={deleteIcon}
        className="folder-list__delete-icon"
        width="20px"
        height="20px"
        alt="Tasks icon"></img>
    </li>
  );
}

export default FolderItem;
