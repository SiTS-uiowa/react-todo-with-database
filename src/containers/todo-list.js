import { connect } from 'react-redux';
import { toggleTodo } from '../action-creators';
import { TodoList } from '../components/todo-list';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (index) => {
      dispatch(toggleTodo(index));
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;