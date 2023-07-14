import React from 'react';
import { Container, Typography } from '@mui/material';

const HomeView = () => {
  return(
    <Container className="view-container" maxWidth="sm">
      <Typography className="view-header no-cursor" variant="h4" align="center" gutterBottom>
        Home View
      </Typography>
    </Container>
  );
};

export default HomeView;