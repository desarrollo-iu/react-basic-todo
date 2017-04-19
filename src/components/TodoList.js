import React from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = dispatch => {
  return { 

  };
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
