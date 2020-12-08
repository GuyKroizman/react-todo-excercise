import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TodoItem from './TodoItem';

function TodoList({ filter }) {
  const [tasks, setTasks] = useState([]);

  function onTaskInsert(taskDesc) {
    setTasks([...tasks, { id: taskDesc, desc: taskDesc, status: 'active' }]);
  }

  function handleCompletedTask(event) {
    const targetTask = tasks.find((v) => v.id === event.target.id);
    targetTask.status = 'completed';
    setTasks([...tasks]);
  }

  return (
    <>
      <div>
        New Task: <TaskInput callback={onTaskInsert}></TaskInput>
      </div>
      {tasks
        .filter((t) => {
          if (filter === 'all') {
            return true;
          }
          return t.status === filter;
        })
        .map((t) => {
          console.log('map element ');
          console.log(t);
          return (
            <div key={t.id}>
              <TodoItem task={t} />{' '}
              <button id={t.id} onClick={handleCompletedTask}>
                Did it!
              </button>
            </div>
          );
        })}
    </>
  );
}

export default TodoList;
