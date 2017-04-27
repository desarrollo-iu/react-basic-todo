import React from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux';
import { fetchTodos } from '../reducer';

class TodoList extends React.Component{
  render(){
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => <TodoItem key={todo.id} {...todo}
             /> )}

        </ul>
      </div>
    )
  }
  componentDidMount(){
    this.props.fetchInitialTodos();
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchInitialTodos:()=>{
      return dispatch(fetchTodos());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
