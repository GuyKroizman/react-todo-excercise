import React from 'react';

function TodoItem({ task }) {
  if (task.status === 'completed') {
    return <strike>{task.desc}</strike>;
  }
  return <>{task.desc}</>;
}

export default TodoItem;
