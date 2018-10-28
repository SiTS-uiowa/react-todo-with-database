import produce from 'immer';

import * as ActionType from './action-types';

const initialState = {
  todos: []
};

export function todoApp(state, action) {
  if (state === undefined) {
    return initialState;
  }

  // Handle actions
  switch(action.type) {
    case ActionType.CREATE_TODO:
      return addTodo(state, action);
    case ActionType.TOGGLE_TODO:
      return toggleTodo(state, action);
  }

  return state;
}

function addTodo(state, action) {
  return produce(state, (draft) => {
    draft.todos.push({name: action.name, completed: false})
  })
}

function toggleTodo(state, action) {
  return produce(state, (draft) => {
    draft.todos[action.index].completed = !draft.todos[action.index].completed;
  })
}