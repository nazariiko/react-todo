import React from 'react';

import editIcon from '../assets/images/edit.svg';
import deleteIcon from '../assets/images/delete.svg';

function TaskItem({ id, folder, text }) {
  console.log(text);
  return (
    <li className="task-list-item">
      <p className="task-list-item__text">{text}</p>
      <div className="task-list-item-bottom-side">
        <div className={`task-list-item__colored-label ${folder.colorName}`}></div>
        <img
          className="task-list-item__edit-icon"
          src={editIcon}
          alt="edit"
          width="20px"
          height="20px"></img>
        <img
          className="task-list-item__delete-icon"
          src={deleteIcon}
          alt="delete"
          width="20px"
          height="20px"></img>
      </div>
    </li>
  );
}

export default TaskItem;
