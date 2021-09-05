import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from '../redux/actions/tasks';

import TaskItem from './TaskItem';

function TasksList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const activeFolderName = useSelector((state) => state.filter.activeFolderName);

  React.useEffect(() => {
    dispatch(fetchTasks(activeFolderName));
  }, [activeFolderName]);

  return (
    <ul className="tasks-list">
      {tasks && tasks.map((task) => <TaskItem {...task} key={task.id} />)}
    </ul>
  );
}

export default TasksList;
