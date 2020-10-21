import './todos.css';
import React from 'react';
import { useSelector } from 'react-redux';

function Post({ title, status }) {
  return (
    <div className={status ? 'post complited': 'post'}>
      <div className='post-title'>{title}</div>
    </div>
  );
}

function Todos() {
  const todos = useSelector(state => state.getTodosReducer.todos);

  return (
    <div className='todos-container'>
      {
        todos ? todos.map(el => <Post title={el.title} key={el.id} status={el.completed}/>) : 'Sorry'
      }
    </div>
  );
}

export default Todos;