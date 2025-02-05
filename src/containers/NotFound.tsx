import ShineBorder from 'src/components/ui/shine-border';
import { Container, Typography, Box } from '@mui/material';
import React from 'react';

export const NotFound = () => {
  return (
    <Container maxWidth="sm" className="App">
      <Box className="App-header z-10">
        <ShineBorder
          className="flex w-full flex-col items-center justify-center overflow-hidden bg-white"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Ups! You are lost
          </Typography>
          <Typography
            variant="overline"
            color="gray"
            component="h1"
            gutterBottom
          >
            Verify the URL and try again
          </Typography>
        </ShineBorder>
      </Box>
    </Container>
  );
};
