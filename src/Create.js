import React from 'react';
import { useState } from 'react';

export default function Create() {
  const [task, setTask] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <div className="Create">
      <form onSubmit={handleSubmit}>
        <input onChange={e => setTask(e.target.value)}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
