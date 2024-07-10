import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Add = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        '& .MuiInputBase-root': { color: 'white' }, 
        '& .MuiInputLabel-root': { color: 'white' }, 
        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'blue' }, 
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={3}>
          <TextField id="outlined-basic" label="Name" variant="standard" fullWidth />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField id="filled-basic" label="Department" variant="standard" fullWidth />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField id="standard-basic" label="Semester" variant="standard" fullWidth />
        </Grid>
        <Grid item xs={12} md={3} container justifyContent="center" alignItems="center">
          <Button variant="contained" sx={{ height: '100%' }}>Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Add;
