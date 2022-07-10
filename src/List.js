import React, { useEffect } from 'react';
import { useState } from 'react';
import { getList } from './services/fetch-utils';

export default function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchLists() {
      const tasks = await getList();

      setTasks(tasks);
    }
    fetchLists();
  }, []);

  return (
    <div>
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
