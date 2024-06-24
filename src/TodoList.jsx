import * as React from 'react';
import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import Todoitem from './Todoitem';
import TodoForm from './TodoForm';

// const initialTodos = [
//     { id: 1, text: "walk the dog", completed: false },
//     { id: 2, text: "home work", completed: false },
//     { id: 3, text: "project", completed: true },
//     { id: 4, text: "meeting", completed: true },
// ]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) return []
    return data
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData)
    useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        )
    }, [todos])
    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id)
        })
    }
    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }
    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo, completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })
        })
    }
    return (
        <List sx={{ width: '100', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <Todoitem
                    todo={todo}
                    key={todo.id}
                    remove={removeTodo}
                    toggle={() => toggleTodo(todo.id)}
                />
            ))}
            <TodoForm addTodo={addTodo} />
        </List>
    );
}

