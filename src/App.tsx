import { useEffect } from 'react';
import { Container, Typography, TextField, Box, Avatar } from '@mui/material';
import ShineBorder from 'src/components/ui/shine-border';
import { RainbowButton } from './components/ui/rainbow-button';
import { useParams } from 'react-router-dom';
import './App.css';
import { NumberTicker } from './components/ui/number-ticker';
import { useDispatch, useSelector } from 'react-redux';
import {
  // loadingProcessSelector,
  loadOrganisation,
  organisationSelector,
} from './state/organisation';
import { AppDispatch } from './state/store';

function App() {
  const { organisation } = useParams<{ organisation: string }>();
  const organisationData = useSelector(organisationSelector);
  // const organisationLoading = useSelector(loadingProcessSelector);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!organisation) {
      return;
    }

    dispatch(loadOrganisation(organisation));
  }, [organisation, dispatch]);

  if (!organisation) {
    return <div>Organisation not specified</div>;
  }

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
          <Typography variant="body1" gutterBottom>
            {organisationData?.description}
          </Typography>
          <Typography variant="button" color="#64017a" gutterBottom>
            <NumberTicker
              value={organisationData?.subscribersCount || 0}
              color="#64017a"
            />
            {' subscribers'}
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
    </Container>
  );
}

export default App;
