import { createSlice } from '@reduxjs/toolkit';
import { TypeTodo } from '../types/types'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as TypeTodo[],
  },
  reducers: {
    addTodo(state, action) {
      const newTodo: TypeTodo = {
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      };

      state.todos.push(newTodo)
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)!;
      toggledTodo.completed = !toggledTodo?.completed
    },
  }
})

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;