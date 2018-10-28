import React from 'react';

const TodoItem = (props) => (
  <div onClick={props.onClick} >
    <input type="checkbox" checked={props.checked} />
    <span>{props.name}</span>
  </div>
)

export default TodoItem;