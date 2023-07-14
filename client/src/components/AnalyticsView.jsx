import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AnalyticsView = ({ changeView }) => {
  return(
    <Container className="view-container" maxWidth="sm">
      <Typography className="view-header no-cursor" variant="h4" align="center" gutterBottom>
        Analytics View
      </Typography>
      <Box className="login-link-box">
        <Typography variant="body1" align="center" className="login-link no-cursor" onClick={() => changeView('login')}>
          Login to access all features
        </Typography>
      </Box>
    </Container>
  );
};

export default AnalyticsView;