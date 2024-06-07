import React, { useState } from 'react';

const TodoList = () => {
const [todos, setTodos] = useState('');
const [list, setList] = useState([]);

const handleAddTodo = () => {
    const newTask = {
        id: Math.random(),
        todo: todos
    };
    setList([...list, newTask]);
    setTodos('');
};
const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) =>
    todo.id !== id);
    setList(newList);
};
const handleInputChange = (e) => {
    setTodos(e.target.value);
  };
    return (
        <div className='Todo'>
            <h1>My Todo List</h1>
            <div className='Top'>
                <input 
                className='input'
                type='text'
                value={todos}
                onChange={handleInputChange}
                placeholder='Enter a task' />
                <button className='btn' onClick={handleAddTodo}>ADD</button>
            </div>
            <ul>
                { list.map((todo) => (
                    <li 
                        className='task'
                        key={todo.id}>
                            {todo.todo}
                            <button onClick={() => handleDeleteTodo(todo.id)}>
                                DELETE
                            </button>
                        </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default TodoList;