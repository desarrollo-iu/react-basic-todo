import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
	return (
		<div>
            <ul>
              {props.todos.map(todo => <TodoItem key={todo.id} {...todo} 
              	handleToggle={props.handleToggle}
              	handleRemove={props.handleRemove} /> )}
              
            </ul>
      	</div>
	)
}

export default TodoList;