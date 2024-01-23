import React, { useState } from 'react';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Main from '../Main/Main';

import { TypeTodo } from '../../types/types';
import TodoList from '../TodoList/TodoList';
import InputField from '../InputField/InputField';

const App = () => {
  const [todos, setTodos] = useState<TypeTodo[]>([]);
  const [text, setText] = useState<string>('');

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const addTodos = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('');
    }
  }

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  const toggleTodoCompleted = (todoId: string) => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    )
  }

  return (
    <div className="App">
      <InputField 
        text={text}
        onChangeText={handleChangeText}
        onAddTodo={addTodos}
      />
      <TodoList 
        todos={todos}
        onRemoveTodo={removeTodo}
        onToggleComplete={toggleTodoCompleted}
      />
    </div>
  );
}

export default App;
