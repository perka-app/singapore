import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Box className="App-header" sx={{ p: 4, borderRadius: 2, pt: 20 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}
        >
          PERKA
        </Typography>
        <Typography variant="overline" gutterBottom>
          Join our family and stay connected!
        </Typography>
        <Box
          component="form"
          className="join-form"
          noValidate
          autoComplete="off"
          sx={{ p: 3, borderRadius: 2 }}
        >
          <TextField
            label="How can we call you?"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            fullWidth
          >
            Join
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
