import React, { useEffect, useReducer, useRef, useState } from 'react';

const initialstate = {
  tasks: [],
};

// Define action types
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((tasks) => tasks.id != action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialstate);
  const inputRef = useRef(null);
  const handleAddTask = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      const isDuplicate = state.tasks.some(
        (task) => task.text === inputValue.trim()
      );
      if (!isDuplicate) {
        dispatch({ type: ADD_TASK, payload: inputValue });
        setInputValue('');
        inputRef.current.focus();
      }
    }
  };

  useEffect(() => {
    // Load tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      savedTasks.forEach((task) =>
        dispatch({ type: ADD_TASK, payload: task.text })
      );
    }
  }, []);

  useEffect(() => {
    // Save tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  useEffect(() => {
    // Focus input field on mount
    inputRef.current.focus();
  }, []);

  const handleToggleTask = (id) => {
    dispatch({ type: TOGGLE_TASK, payload: id });
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: REMOVE_TASK, payload: id });
  };

  return (
    <div className="col-md-7 d-flex flex-column">
      <div className="col ">
        <form onSubmit={handleAddTask} className="d-flex gap-3">
          {' '}
          <input
            type="text"
            className="form-control "
            placeholder="Tasks"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            ref={inputRef}
          />
          <button className="btn btn-outline-danger" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="col my-3">
        <table className="table w-100 ">
          <tbody className=" ">
            {state.tasks.map((task, index) => {
              return (
                <tr key={task.id} className="bg-info">
                  <td>{index + 1}</td>
                  <td>
                    <input
                      className="form-input-check"
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(task.id)}
                    />
                  </td>
                  <td
                    style={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                    }}
                  >
                    {' '}
                    {task.text}
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleRemoveTask(task.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
