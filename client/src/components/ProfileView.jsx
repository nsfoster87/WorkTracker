import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const ProfileView = ({ changeView }) => {
  return(
    <Container className="view-container" maxWidth="sm">
      <Typography className="view-header no-cursor" variant="h4" align="center" gutterBottom>
        Profile View
      </Typography>
      <Box className="login-link-box">
        <Typography variant="body1" align="center" className="login-link no-cursor" onClick={() => changeView('login')}>
          Login to access all features
        </Typography>
      </Box>
    </Container>
  );
};

export default ProfileView;