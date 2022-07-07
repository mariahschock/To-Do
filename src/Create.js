import React from 'react';
import { useState } from 'react';
import { createList } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [task, setTask] = useState([]);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await createList({
      task: task
    });

    setTask('');

    history.push('/list');
  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <input onChange={e => setTask(e.target.value)} value={task}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
