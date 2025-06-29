// src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import logoImage from '../assets/images/logo/logo.svg';
import ninjagoImage from '../assets/images/others/ninjago.png';
import AnimatedBox from '../components/AnimatedBox';
import NinjagoButton from '../components/NinjagoButton';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Después de 3 segundos, mostrar el contenido
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
      <Box sx={{ pt: 1, pb: 1 }}>
        {/* Ninjago aparece solo cuando showContent es true */}
        {showContent && (
          <AnimatedBox animation="slideInFromLeft" delay={0.2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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
        )}

        {/* Logo exactamente como el Home original + animación simple */}
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
              filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.3))',
              // Animación simple: empieza gris y se colorea
              animation: 'logoColorReveal 3s ease-out forwards'
            }}
          />
        </Box>

        {/* Botones aparecen solo cuando showContent es true */}
        {showContent && (
          <AnimatedBox animation="slideInFromLeft" delay={0.4}>
            <Grid container spacing={0} sx={{ gap: 0 }}>
              <Grid item xs={12} sx={{ padding: 0, margin: 0 }}>
                <AnimatedBox animation="slideInFromLeft" delay={0.4} sx={{ margin: 0 }}>
                  <NinjagoButton
                    buttonType="invitacion"
                    onClick={() => navigate('/invitacion')}
                    sx={{
                      display: 'block',
                      margin: '0 auto'
                    }}
                  >
                  </NinjagoButton>
                </AnimatedBox>
              </Grid>

              <Grid item xs={12} sx={{ padding: 0, margin: 0 }}>
                <AnimatedBox animation="slideInFromLeft" delay={0.6} sx={{ margin: 0 }}>
                  <NinjagoButton
                    buttonType="juegoninja"
                    onClick={() => navigate('/juega')}
                    sx={{
                      display: 'block',
                      margin: '0 auto'
                    }}
                  >
                  </NinjagoButton>
                </AnimatedBox>
              </Grid>

              <Grid item xs={12} sx={{ padding: 0, margin: 0 }}>
                <AnimatedBox animation="slideInFromLeft" delay={0.8} sx={{ margin: 0 }}>
                  <NinjagoButton
                    buttonType="curiosidades"
                    onClick={() => navigate('/curiosidades-ninja')}
                    sx={{
                      display: 'block',
                      margin: '0 auto'
                    }}
                  >
                  </NinjagoButton>
                </AnimatedBox>
              </Grid>
            </Grid>
          </AnimatedBox>
        )}
      </Box>

      {/* Animación simple del logo - de gris a color */}
      <style>
        {`
          @keyframes logoColorReveal {
            0% {
              filter: grayscale(100%) brightness(1.2) drop-shadow(2px 2px 8px rgba(0,0,0,0.3));
            }
            100% {
              filter: grayscale(0%) brightness(1) drop-shadow(2px 2px 8px rgba(0,0,0,0.3));
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Home;