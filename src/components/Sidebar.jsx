import React from 'react'
import { FoldersList, AddFolder } from './';

import taskIcon from '../assets/images/task.svg';



function Sidebar() {

  return (
    <div className="sidebar">
        <div className="sidebar__heading">
          <img className="" src={taskIcon} width="25px" height="25px" alt="Tasks icon"></img>
          <h2>Tasks</h2>
        </div>

        <div className="folders">
          <FoldersList />
        </div>

        <AddFolder />
      </div>
  )
}

export default React.memo(Sidebar)
