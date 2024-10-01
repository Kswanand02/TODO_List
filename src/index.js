import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TodoList from './todo_list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoList/>);

reportWebVitals();
