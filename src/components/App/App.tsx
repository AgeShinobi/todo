import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/TodoSlice'
import './App.css';

import TodoList from '../TodoList/TodoList';
import InputField from '../InputField/InputField';

const App = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}));
    setText('');
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }


  return (
    <div className="App">
      <InputField
        text={text}
        onChangeText={handleChangeText}
        onAddTodo={addTask}
      />
      <TodoList />
    </div>
  );
}

export default App;
