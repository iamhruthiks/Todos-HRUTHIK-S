import * as React from 'react';
import List from '@mui/material/List';
import { useState } from 'react';
import Todoitem from './Todoitem';

const initialTodos = [
    { id: 1, text: "walk the dog", completed: false },
    { id: 2, text: "home work", completed: false },
    { id: 3, text: "project", completed: true },
    { id: 4, text: "meeting", completed: true },
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos)
    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id)
        })
    }
    return (
        <List sx={{ width: '100', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <Todoitem
                    todo={todo}
                    key={todo.id}
                    remove={removeTodo}
                />
            ))}
        </List>
    );
}

