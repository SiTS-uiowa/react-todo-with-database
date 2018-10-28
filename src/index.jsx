import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { todoApp } from './reducers';

import AddTodo from './containers/add-todo';
import TodoList from './containers/todo-list';

const store = createStore(todoApp);

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
  </div>
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));