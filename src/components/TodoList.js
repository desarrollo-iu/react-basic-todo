import React from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux';

const TodoList = (props) => {
	return (
		<div>
      <ul>
        {props.todos.map(todo => <TodoItem key={todo.id} {...todo} 
        	 /> )}
        
      </ul>
  	</div>
	)
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = dispatch => {
  return { 

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
