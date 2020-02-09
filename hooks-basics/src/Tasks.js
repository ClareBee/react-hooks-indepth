import React, { useState, useEffect, useReducer } from 'react';
import uuid from 'uuid/v4'; // based on timestamp & randomly generated numbers

const initialTasksState = {
  tasks: [],
  completedTasks: []
}

const TYPES = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK'
}
//reducer returns relevant state for component
const tasksReducer = (state, action) => {
  console.log('state', state)
  console.log('action', action)
  switch(action.type){
    case TYPES.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    case TYPES.COMPLETE_TASK:
    const { completedTask } = action;
      return {
        ...state,
        completedTasks: [ ...state.completedTasks, completedTask],
        tasks: state.tasks.filter(task => task.id !== completedTask.id)
      }
    case TYPES.DELETE_TASK:
      const { taskToDelete } = action;
      return {
        ...state,
        completedTasks: state.completedTasks.filter(task => task.id !== taskToDelete.id)
      }

    default:
      return state
  }
};

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
  return tasksMap ? tasksMap : initialTasksState;
}
function Tasks(){
  const [taskText, setTaskText] = useState('');
  const storedTasks = readStoreTasks();

// dispatch triggers the reducer
  const [state, dispatch] = useReducer(tasksReducer, storedTasks);
  const { tasks, completedTasks } = state;

// called after rerender - rerenders on state change => latest state of tasks
  useEffect(() => {
    storeTasks({tasks, completedTasks});
  });

  const updateTaskText = event => {
    setTaskText(event.target.value);
  }

  const addTask = () => {
    dispatch({ type: TYPES.ADD_TASK, task: { id: uuid(), taskText }});
  }

// return function to stop inline execution
  const completeTask = completedTask => () => {
    dispatch({ type: TYPES.COMPLETE_TASK, completedTask });
  }

  const deleteTask = taskToDelete => () => {
    dispatch({ type: TYPES.DELETE_TASK, taskToDelete })
  }

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
