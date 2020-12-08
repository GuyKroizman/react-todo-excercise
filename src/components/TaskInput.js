import React from 'react';

function TaskInput({ callback }) {
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      const taskDesc = event.target.value;
      callback(taskDesc);
      event.target.value = '';
    }
  }
  return <input onKeyDown={handleKeyDown}></input>;
}

export default TaskInput;
