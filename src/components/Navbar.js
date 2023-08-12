import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from 'react-bootstrap/Alert'

import { DeleteContext } from './context/ContextProvider';
export default function Navbar() {
    const { dlttask, setDlettask } = useContext(DeleteContext);
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" style={{ background: "#232f3e" }}>

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: "center" }}     >
                        WorkNow

                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
        {
            dlttask ? <Alert variant="danger" onClose={() => setDlettask(false)} dismissible>
                <Alert.Heading>Your Task remove Succesfully</Alert.Heading>
            </Alert> : ""
        }
        </>
    )
}
