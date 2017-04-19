import React from 'react'
import { connect } from 'react-redux'
import { addTodo, changeInput } from '../reducer.js'

const mapStateToProps = (state) => {
  return {
  	currentTodo: state.currentTodo
  };
}

const mapDispatchToProps = dispatch => {
  return { 
    addTodoLocal: (text) => {
      return dispatch(addTodo(text));
    },
    changeInput: (text) => {
    	return dispatch(changeInput(text));
    }
  };
};

const TodoForm = (props) => {
	
	const handleChange = (event) => props.changeInput(event.target.value);

	return (
		<form onSubmit={(evt) => {
			evt.preventDefault();
			props.addTodoLocal(props.currentTodo);
		}}>
			<input type="text" 
			value={props.currentTodo} 
			onChange={handleChange} />
		</form>
	)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm); 