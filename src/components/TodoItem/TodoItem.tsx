import React from 'react'
import { TypeTodoItemProps } from '../../types/types'

const TodoItem = ({
  id,
  text,
  completed,
  onRemoveTodo,
  onToggleComplete,
}: TypeTodoItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <span>{text}</span>
      <span
        className='todo__delete-btn'
        onClick={() => onRemoveTodo(id)}
      >&times;</span>
    </li>
  )
}

export default TodoItem