// src/components/TodoList.js

import React, { useState } from 'react';
import './todo_list.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      if (editingIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editingIndex ? { ...task, text: inputValue, dueDate } : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, { text: inputValue, dueDate }]);
      }
      setInputValue('');
      setDueDate('');
    }
  };

  const handleEditTask = (index) => {
    setInputValue(tasks[index].text);
    setDueDate(tasks[index].dueDate);
    setEditingIndex(index);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDueDateChange}
        placeholder="Due Date"
      />
      <button onClick={handleAddTask}>
        {editingIndex !== null ? 'Update Task' : 'Add Task'}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="task-details">
              <span>{task.text}</span>
              {task.dueDate && <span className="due-date">Due: {task.dueDate}</span>}
            </div>
            <div className="task-actions">
              <button onClick={() => handleEditTask(index)}>Edit</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
