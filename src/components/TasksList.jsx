import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks, deleteTask } from '../redux/actions/tasks';
import { toggleIsEdit, showEditDetails } from '../redux/actions/edit';

import TaskItem from './TaskItem';

function TasksList({ onClickEditTask }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const activeFolderName = useSelector((state) => state.filter.activeFolderName);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (id, content) => {
    onClickEditTask();
    dispatch(showEditDetails(id, content));
    dispatch(toggleIsEdit);
  }

  React.useEffect(() => {
    dispatch(fetchTasks(activeFolderName));
  }, [activeFolderName]);

  return (
    <ul className="tasks-list">
      {tasks &&
        tasks.map((task) => (
          <TaskItem {...task} key={task.id} onClickDeleteTask={handleDeleteTask} onClickEditTask={handleEditTask} />
        ))}
    </ul>
  );
}

export default TasksList;
