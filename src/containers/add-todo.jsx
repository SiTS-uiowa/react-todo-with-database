import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../action-creators';

const AddTodo = (props) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        props.dispatch(createTodo(input.value));
        input.value = "";
      }}
      >
        <input ref={
          node => {
            input = node
          }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const AddTodoContainer = connect()(AddTodo);

export default AddTodoContainer;