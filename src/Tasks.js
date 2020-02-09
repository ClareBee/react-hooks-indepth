import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4'; // based on timestamp & randomly generated numbers

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';
// helper method
const storeTasks = (taskMap) => {
  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify(taskMap)
  )
}

const readStoreTasks = () => {
  const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return tasksMap ? tasksMap : { tasks: [], completedTasks: [] };
}
function Tasks(){
  const [taskText, setTaskText] = useState('');
  const storedTasks = readStoreTasks();
  const [tasks, setTasks] = useState(storedTasks.tasks);
  const [completedTasks, setCompletedTasks] = useState(storedTasks.completedTasks);

// called after rerender - rerenders on state change => latest state of tasks
  useEffect(() => {
    storeTasks({tasks, completedTasks});
  });

  const updateTaskText = event => {
    setTaskText(event.target.value);
  }

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid()}]);
  }

// return function to stop inline execution
  const completeTask = completedTask => () => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter(task => task.id !== completedTask.id));
  }

  const deleteTask = taskToDelete => () => {
    setCompletedTasks(completedTasks.filter(task => task.id !== taskToDelete.id));
  }
  console.log('tasks', tasks)
  console.log('completed', completedTasks)

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
      {tasks.map(task => {
        const { id, taskText } = task;
        return (
          <div
            key={id}
            onClick={completeTask(task)}>
            {taskText}
          </div>
        )
      })
      }
      </div>
      <div className="completed-list">
      {completedTasks.map(task => {
        const { id, taskText } = task;
        return (
          <div key={id}>
            {taskText}{' '}
            <span className="delete-task" onClick={deleteTask(task)}>&times;</span>
          </div>
        )
      })

      }
      </div>
    </div>
  )
}
export default Tasks;
