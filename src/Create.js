import React from 'react';
import { useState, useEffect } from 'react';
import { createList } from './services/fetch-utils';
// import { useHistory } from 'react-router-dom';
import { getList } from './services/fetch-utils';


export default function Create() {
  const [task, setTask] = useState([]);
  // const history = useHistory();
  const [tasks, setTasks] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    await createList({
      task: task
    });

    setTask('');

    // history.push('/list');
  }

  useEffect(() => {
    async function fetchLists() {
      const tasks = await getList();

      setTasks(tasks);
    }
    fetchLists();
  }, []);

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <input onChange={e => setTask(e.target.value)} value={task}></input>
        <button>Submit</button>
      </form>
      {
        tasks.map((task, i) => <div className="task" key={task.action + i} > 
          <ul>
            <li>{task.task}</li>
          </ul>
        </div>)
      }
    </div>
  );
}
