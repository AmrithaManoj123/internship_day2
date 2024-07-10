import React from 'react';
import './App.css';
import Record from './components/Record';
import Add from './components/Add';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App(){
  return (
    <>
      <h1>Welcome to React session</h1>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LIST
            </Typography>
            <Button color="inherit">View</Button>
            <Button color="inherit">Read</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Record />
      <Add/>
    </>
  );
}

export default App;
