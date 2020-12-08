import React from 'react';

function FilterBar({ setFilter }) {
  function handleFilterSelect(event) {
    setFilter(event.target.id);
  }

  return (
    <div>
      <button id="all" onClick={handleFilterSelect}>
        All
      </button>
      <button id="active" onClick={handleFilterSelect}>
        Active
      </button>
      <button id="completed" onClick={handleFilterSelect}>
        Completed
      </button>
    </div>
  );
}

export default FilterBar;
