import React from 'react';
import { Container, Typography } from '@mui/material';

const IncomeView = () => {
  return(
    <Container className="view-container" maxWidth="sm">
      <Typography className="view-header no-cursor" variant="h4" align="center" gutterBottom>
        Income View
      </Typography>
    </Container>
  );
};

export default IncomeView;