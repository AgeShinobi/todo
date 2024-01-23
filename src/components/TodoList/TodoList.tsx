import React from 'react';
import { useSelector } from 'react-redux'

import { TypeTodo } from '../../types/types'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = () => {

  const todos = useSelector((state: { todos: { todos: TypeTodo[]} }) => state.todos.todos); // TODO

  return (
    <ul>
      {
        todos.map((todo: TypeTodo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          )
        })

      }
    </ul>
  )
}

export default TodoList