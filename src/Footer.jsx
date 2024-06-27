import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import zIndex from '@mui/material/styles/zIndex';

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 1000,
}

export default function Footer() {
    return (
        <div style={footerStyle}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                            &copy; Todos 2024
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}