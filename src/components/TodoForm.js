import React from 'react'

const TodoForm = (props) => (
	<form onSubmit={props.handleSubmit}>
		<input type="text" 
		value={props.currentTodo} 
		onChange={props.handleInputChange} />
	</form>
)

export default TodoForm;