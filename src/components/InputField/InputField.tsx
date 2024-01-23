import React from 'react'

import { TypeInputFieldProps } from '../../types/types';

const InputField = ({ text, onChangeText, onAddTodo }: TypeInputFieldProps) => {
  return (
    <label>
      <input
        type="text"
        value={text}
        onChange={onChangeText}
      />
      <button onClick={onAddTodo}>Add Todo</button>
    </label>
  )
}

export default InputField