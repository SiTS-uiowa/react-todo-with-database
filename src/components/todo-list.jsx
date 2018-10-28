import React from 'react';
import TodoItem from './todo-item';

export const TodoList = (props) => (
  <ul>
    {props.todos.map((todo, index) => (
      <TodoItem key={index} onClick={() => props.onTodoClick(index)} name={todo.name} checked={todo.completed} />
    ))}
  </ul>
)