import React, { useState } from 'react';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';

function App() {
  const [filter, setFilter] = useState('active');
  return (
    <>
      <h1>Todo</h1>
      <TodoList filter={filter}></TodoList>
      <FilterBar setFilter={setFilter}></FilterBar>
    </>
  );
}

export default App;
