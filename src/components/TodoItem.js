import React from 'react';

const TodoItem = (props) => {
	const handleToggle = () => props.handleToggle(props.id);
	const handleRemove = (event) => props.handleRemove(props.id, event);
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

export default TodoItem;
