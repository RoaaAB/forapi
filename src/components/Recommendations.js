import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Recommendations = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Recommended Tools
        </Typography>
        <Typography variant="body1" paragraph>
          Based on your interests, we recommend the following tools:
        </Typography>
      </Box>
    </Container>
  );
};

export default Recommendations;
