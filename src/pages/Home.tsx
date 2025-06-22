// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import { Mail as MailIcon, SportsEsports as GamesIcon, Psychology as PsychologyIcon } from '@mui/icons-material';
import logoImage from '../assets/images/logo/logo.png';
import ninjagoImage from '../assets/images/others/ninjago.png';
import AnimatedBox from '../components/AnimatedBox';

const ninjaButtonStyles = {
  py: 2.5,
  px: 4,
  fontSize: '1.1rem',
  fontFamily: '"ABeeZee", sans-serif',
  textTransform: 'none',
  borderRadius: 4,
  fontWeight: 700,
  letterSpacing: 1,
  backgroundColor: '#111',
  color: '#FFE600',
  border: '2px solid #CC2A00',
  boxShadow: '0 0 12px #CC2A00',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#CC2A00',
    color: '#111',
    boxShadow: '0 0 16px #E65100', 
    transform: 'translateY(-2px) scale(1.03)',
  },
  '&:active': {
    boxShadow: 'inset 0 0 12px #000',
    transform: 'translateY(0) scale(0.98)',
  }
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
      <Box sx={{ pt: 2, pb: 2 }}>
        {/* Imagen de Ninjago pequeña arriba */}
        <AnimatedBox animation="slideInFromLeft" delay={0.2}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <img
              src={ninjagoImage}
              alt="Ninjago"
              style={{
                maxWidth: '300px',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(1px 1px 4px rgba(0,0,0,0.4))'
              }}
            />
          </Box>
        </AnimatedBox>

        {/* Logo principal */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={logoImage}
              alt="Logo Mario 4 años"
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '300px',
                objectFit: 'contain',
                filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.3))'
              }}
            />
          </Box>
      </Box>

      <AnimatedBox animation="slideInFromLeft" delay={0.4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <AnimatedBox animation="slideInFromLeft" delay={0.4}>
                <Box
                  onClick={() => navigate('/invitacion')}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', ...ninjaButtonStyles }}
                >
                  <MailIcon sx={{ mr: 1 }} /> Invitación ninja
                </Box>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12}>
              <AnimatedBox animation="slideInFromLeft" delay={0.6}>
                <Box
                  onClick={() => navigate('/juega')}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', ...ninjaButtonStyles }}
                >
                  <GamesIcon sx={{ mr: 1 }} /> Juego ninja
                </Box>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12}>
              <AnimatedBox animation="slideInFromLeft" delay={0.8}>
                <Box
                  onClick={() => navigate('/curiosidades-ninja')}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', ...ninjaButtonStyles }}
                >
                  <PsychologyIcon sx={{ mr: 1 }} /> Curiosidades ninja
                </Box>
              </AnimatedBox>
            </Grid>
          </Grid>
      </AnimatedBox>
    </Container>
  );
};

export default Home;