// src/components/LoadingScreen.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import logoImage from '../assets/images/logo/logo.png';
import backgroundImage from '../assets/images/background/background.png';

const LoadingScreen: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.3)', 
          zIndex: 0,
          pointerEvents: 'none'
        }
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Logo con animación de colorización de arriba hacia abajo */}
        <Box
          sx={{
            position: 'relative',
            width: '300px',
            height: '300px',
            overflow: 'hidden',
            top: 28,
          }}
        >
          {/* Logo en escala de grises (base) */}
          <img
            src={logoImage}
            alt="Logo Mario"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'grayscale(100%) brightness(1.2)',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          
          {/* Logo a color con máscara animada */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '0%',
                background: 'transparent',
                animation: 'revealColor 3s ease-out forwards',
                zIndex: 1
              },
              '@keyframes revealColor': {
                '0%': { 
                  height: '0%'
                },
                '100%': { 
                  height: '100%'
                }
              }
            }}
          >
            <img
              src={logoImage}
              alt="Logo Mario a color"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                clipPath: 'inset(0 0 100% 0)',
                animation: 'clipReveal 4s ease-out forwards'
              }}
            />
          </Box>
        </Box>

        {/* Texto de carga */}
        <Typography
          variant="h5"
          sx={{
            color: '#FFE600',
            fontFamily: '"ABeeZee", sans-serif',
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            animation: 'textFadeIn 2s ease-out 4s forwards',
            opacity: 0,
            '@keyframes textFadeIn': {
              '0%': { 
                opacity: 0,
                transform: 'translateY(20px)'
              },
              '100%': { 
                opacity: 1,
                transform: 'translateY(0)'
              }
            }
          }}
        >
          Preparando la aventura ninja...
        </Typography>
      </Box>

      {/* Estilos para la animación del clip-path */}
      <style>
        {`
          @keyframes clipReveal {
            0% {
              clip-path: inset(0 0 100% 0);
            }
            100% {
              clip-path: inset(0 0 0% 0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default LoadingScreen;