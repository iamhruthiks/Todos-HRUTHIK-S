import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import ReactGA from "react-ga4"

export default function Todoitem({ todo, remove, toggle }) {
    const removeTodo = () => {
        ReactGA.event({
            category: 'Form',
            action: 'submit',
            label: 'remove-todo'
        })
        remove(todo.id)
    }
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem
            key={todo.id}
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggle}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={<p style={{ fontSize: '20px' }}>{todo.text}</p>} />
            </ListItemButton>
        </ListItem>
    )
}