import React from 'react'

const TodoForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<input type="text" 
			value={props.currentTodo} 
			onChange={props.handleInputChange} />
		</form>
	)
}

export default TodoForm;