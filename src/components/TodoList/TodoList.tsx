import React from 'react'

import { TypeTodoListProps } from '../../types/types'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, onRemoveTodo, onToggleComplete }: TypeTodoListProps) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onToggleComplete={onToggleComplete}
            />
          )
        })

      }
    </ul>
  )
}

export default TodoList