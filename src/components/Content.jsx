import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TasksList } from './';

import plusTaskIcon from '../assets/images/plus-task.svg';

function Content() {
  const activeFolderName = useSelector((state) => state.filter.activeFolderName);

  return (
    <div className="content">
      <h2 className="content__folder-name">{activeFolderName}</h2>

      <TasksList />

      <button className="add-task-button button">
        <img src={plusTaskIcon} alt="plus" width="50px" height="50px"></img>
      </button>
    </div>
  );
}

export default Content;
