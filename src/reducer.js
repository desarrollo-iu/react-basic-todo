import { generateId } from './utils/helpers'

const types = {
	ADD_TODO: 'ADD_TODO',
	TOOGLE_TODO: 'TOOGLE_TODO',
	REMOVE_TODO: 'REMOVE_TODO',
	CHANGE_INPUT: 'CHANGE_INPUT',
}

//***** ACTION CREATORS
export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    payload: text
  };
};

export const changeInput = (text) => {
  return {
    type: types.CHANGE_INPUT,
    payload: text
  };
};

export const toogleTodo = (id) => {
  return {
    type: types.TOOGLE_TODO,
    payload: id
  };
};

export const removeTodo = (id) => {
  return {
    type: types.REMOVE_TODO,
    payload: id
  };
};

const initialState = {
  todos: [
    {id: 1, name: 'Learn React', isComplete: false},
    {id: 2, name: 'Learn Redux', isComplete: true},
    {id: 3, name: 'Learn ReactNative ', isComplete: false},
    {id: 4, name: 'Learn NodeJSss', isComplete: false}
  ],
  currentTodo: ''
};

export default (state = initialState, action) => {

  if(action.type === types.ADD_TODO) {
    const newId = generateId();
    const newTodo = { id: newId,  name: action.payload, isComplete: false };

    const updatedTodos = [...state.todos, newTodo];

    return {
      ...state,
      todos: updatedTodos
    }
  }
  if(action.type === types.CHANGE_INPUT) { 
    return {
      ...state,
      currentTodo: action.payload
    }
  }
  if(action.type === types.TOOGLE_TODO) {
    const index = state.todos.findIndex(item => item.id === action.payload);
    const todo = state.todos[index];
    const updatedTodo = {...todo, isComplete: !todo.isComplete};
    const updatedTodos = [
    ...state.todos.slice(0, index),
    updatedTodo,
    ...state.todos.slice(index + 1)
    ];

    return {
      ...state,
      todos: updatedTodos
    }
  }
  if(action.type === types.REMOVE_TODO) {
    const removeIndex = state.todos.findIndex(item => item.id === action.payload)
    const updatedTodos =  [
    ...state.todos.slice(0, removeIndex),
    ...state.todos.slice(removeIndex+1)
    ];

    return {
      ...state,
      todos: updatedTodos
    }
  }
  return state;
};
