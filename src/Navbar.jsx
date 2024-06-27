import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Todos
                    </Typography>
                    <a href="https://github.com/iamhruthiks/Todos-HRUTHIK-S" target='blank' style={{ color: 'white', background: 'green' }}><Button color="inherit" style={{ textTransform: 'none' }}>Visit GitHub</Button></a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}