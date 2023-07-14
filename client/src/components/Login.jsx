import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Container, Grid } from '@mui/material';
import axios from 'axios';

const Login = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userPassword = password;
    setPassword('');

    console.log({username, userPassword});
  }

  return (
    <Container maxWidth="sm">
      <Typography className="signup-view-header no-cursor" variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form className="login-form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="username"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box padding={1}>
        <Typography variant="body1" align="center" className="signup-toggle" onClick={switchToSignup}>
          New here? Create Account
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;