import { CREATE_TODO, TOGGLE_TODO } from './action-types';

export function createTodo(name) {
  return {
    type: CREATE_TODO,
    name
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}