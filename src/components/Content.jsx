import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TasksList, Button } from './';

import plusTaskIcon from '../assets/images/plus-task.svg';

function Content({ onClickAddFolder }) {
  const activeFolderName = useSelector((state) => state.filter.activeFolderName);

  return (
    <div className="content">
      <h2 className="content__folder-name">{activeFolderName}</h2>

      <TasksList onClickEditTask={onClickAddFolder} />

      <Button onClick={onClickAddFolder} className="add-task-button button">
        <img src={plusTaskIcon} alt="plus" width="50px" height="50px"></img>
      </Button>
    </div>
  );
}

const ContentPropsAreEqual = () => {
  return true;
};

export default React.memo(Content, ContentPropsAreEqual);
