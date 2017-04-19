import React from 'react';
import { connect } from 'react-redux'
import { toogleTodo, removeTodo } from '../reducer.js'

const mapStateToProps = (state) => {
  return {
    
  };
}

const mapDispatchToProps = dispatch => {
  return { 
    toogleTodo: (id) => {
        return dispatch(toogleTodo(id));
    },
    removeTodo: (id) => {
      return dispatch(removeTodo(id));
    }
  };
};

const TodoItem = (props) => {
	const handleToggle = () => props.toogleTodo(props.id);
	const handleRemove = (event) => props.removeTodo(props.id, event);
	return (
		<li>
			<span className="delete-item">
				<a href="#" onClick={(event) => handleRemove(event)}>X</a>
			</span>
      		<input type="checkbox" 
      			   checked={props.isComplete}
      			   onChange={handleToggle}
      			   /> {props.name }
        </li>
	)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem); 
