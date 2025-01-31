import React, { useEffect } from 'react';
import { Container, Typography, TextField, Box, Avatar } from '@mui/material';
import ShineBorder from 'src/components/ui/shine-border';
import AnimatedGridPattern from 'src/components/ui/animated-grid-pattern';
import { RainbowButton } from './components/ui/rainbow-button';
import { useParams } from 'react-router-dom';
import useOrganisationData from './hooks/useOrganisationData';
import { cn } from 'src/lib/utils';
import './App.css';

function App() {
  const { organisation } = useParams<{ organisation: string }>();

  if (!organisation) {
    return <div>Organisation not specified</div>;
  }

  const organisationData = useOrganisationData(organisation);

  useEffect(() => {
    console.log(organisationData);
    document.title = organisationData?.name || 'Perka';
  }, [organisationData]);

  return (
    <Container maxWidth="sm" className="App">
      <Box className="App-header z-10">
        <ShineBorder
          className="flex w-full flex-col items-center justify-center overflow-hidden bg-white"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <Avatar
            sx={{ width: '50%', height: 'auto' }}
            alt="avatar"
            src={organisationData?.avatarUrl}
          >
            {organisationData?.name[0]}
          </Avatar>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}
          >
            {organisationData?.name}
          </Typography>
          <Typography variant="overline" gutterBottom>
            {organisationData?.description}
          </Typography>
          <Typography variant="overline" gutterBottom>
            {organisationData?.subscribersCount} subscribers
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
            <RainbowButton className="text-white w-full mt-4">
              Join
            </RainbowButton>
          </Box>
        </ShineBorder>
      </Box>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={0.1}
        className={cn(
          '[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[180%] skew-y-12 z-negative',
        )}
      />
    </Container>
  );
}

export default App;
