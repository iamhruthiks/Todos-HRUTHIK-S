import * as React from 'react';
import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import Todoitem from './Todoitem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

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
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
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
        if (text.trim() === "") {
            setOpen(true)
        } else {
            setTodos(prevTodos => {
                return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }]
            })
        }
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
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 3,
            marginBottom: 8,
            marginLeft: 3,
            marginRight: 3
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <Todoitem
                        todo={todo}
                        key={todo.id}
                        remove={removeTodo}
                        toggle={() => toggleTodo(todo.id)}
                    />
                ))}
                {open &&
                    <React.Fragment>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Please enter a valid todo item"}
                            </DialogTitle>
                            <DialogActions>
                                <Button onClick={handleClose}>ok</Button>
                            </DialogActions>
                        </Dialog>
                    </React.Fragment>
                }
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    );
}

