import ListItem from '@mui/material/ListItem';
import { TextField } from '@mui/material';
import { useState, useRef } from 'react';
import { InputAdornment } from '@mui/material'
import { IconButton } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ReactGA from "react-ga4"

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("")
    const firstEventSent = useRef(false);
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    const handleSubmit = (evt) => {

        evt.preventDefault()

        if (!firstEventSent.current) {
            ReactGA.event({
                category: 'Form',
                action: 'submit',
                label: 'users'
            });
            firstEventSent.current = true;
        }

        ReactGA.event({
            category: 'Form',
            action: 'submit',
            label: 'add-todo'
        })
        addTodo(text)
        setText("")
    }
    return (
        <ListItem >
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <TextField
                    id="outlined-basic"
                    label="add todo"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    sx={{ width: '100%' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="create todo"
                                    edge="end"
                                    type="submit"
                                >
                                    <LibraryAddIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    );
}
