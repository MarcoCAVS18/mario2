// src/components/LoadingScreen.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import logoImage from '../assets/images/logo/logo.svg';
import backgroundImage from '../assets/images/background/background.png'; 

const LoadingScreen: React.FC = () => {
  // Proporción: 441.106 mm x 696.72 mm = ~0.633:1 (ancho:alto)
  const aspectRatio = 441.106 / 696.72; // ≈ 0.633

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000', // Fondo negro por defecto
        overflow: 'hidden',
      }}
    >
      {/* Contenedor con las nuevas proporciones */}
      <Box
        sx={{
          position: 'relative',
          width: {
            xs: '100vw', // En móvil ocupa todo el ancho
            sm: '100vw', // En tablet ocupa todo el ancho
            md: `min(100vw, ${100 / aspectRatio}vh)`, // En desktop mantiene proporción
          },
          height: {
            xs: '100vh', // En móvil ocupa toda la altura
            sm: '100vh', // En tablet ocupa toda la altura  
            md: `min(100vh, ${aspectRatio * 100}vw)`, // En desktop mantiene proporción
          },
          maxWidth: '100vw',
          maxHeight: '100vh',
          backgroundImage: `url(${backgroundImage})`, // Nueva imagen de fondo
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // Overlay sutil
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.2)', // Overlay para mejorar legibilidad
            zIndex: 0,
            pointerEvents: 'none'
          }
        }}
      >
        {/* Contenido del loading */}
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Logo con animación de colorización de arriba hacia abajo */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: '250px', sm: '300px', md: '350px' },
              height: { xs: '250px', sm: '300px', md: '350px' },
              overflow: 'hidden',
              mb: 2,
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
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
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
      </Box>

      {/* Barras negras en desktop cuando sea necesario */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000',
          zIndex: -1,
          display: { xs: 'none', md: 'block' }
        }}
      />

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