import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../../store/TodoSlice';
import { TypeTodo } from '../../types/types';

const TodoItem = ({
  id,
  text,
  completed,
}: TypeTodo) => {

  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({id}))}
      />
      <span>{text}</span>
      <span
        className='todo__delete-btn'
        onClick={() => dispatch(removeTodo({id}))}
      >&times;</span>
    </li>
  )
}

export default TodoItem