import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Container, Grid } from '@mui/material';
import axios from 'axios';

const Signup = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userPassword = password;
    setPassword('');

    console.log({ username, email, userPassword });
    // try {
    //   const response = await axios.post('/signup', {
    //     username,
    //     email,
    //     userPassword
    //   });
    // } catch (error) {
    //   console.log('error signing up: ', error);
    // }
  }

  return (
    <Container className="signup-container" maxWidth="sm">
      <Typography className="signup-view-header no-cursor" variant="h4" align="center" gutterBottom>
        Create Account
      </Typography>
      <form className="signup-form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
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
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box padding={1}>
        <Typography variant="body1" align="center" className="signup-toggle no-cursor" onClick={switchToLogin}>
          Have an Account? Login
        </Typography>
      </Box>
    </Container>
  );
}

export default Signup;