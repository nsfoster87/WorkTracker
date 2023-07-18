import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Container, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const Login = ({ setIsLoggedIn, changeView }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', { username, password });
      if (response.status === 200) {
        setIsLoggedIn(true);
        changeView('home');
      }
    } catch (error) {
      console.log('Error logging in:', error);
    } finally {
      setUsername('');
      setPassword('');
    }
  }

  return (
    <>
      <Container className="signup-container" maxWidth="sm">
        <Typography className="view-header no-cursor" variant="h4" align="center" gutterBottom>
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
          <Typography variant="body1" align="center" className="signup-toggle no-cursor" onClick={() => changeView('signup')}>
            New here? Create Account
          </Typography>
        </Box>
      </Container>

      <IconButton className="close-icon-button" onClick={() => changeView('home')} >
        <CloseIcon />
      </IconButton>
    </>
  );
}

export default Login;