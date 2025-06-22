// src/components/LoadingScreen.tsx

import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Security as SecurityIcon } from '@mui/icons-material';
import AnimatedBox from './AnimatedBox';

const LoadingScreen: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Efectos de fondo ninja */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(255, 215, 0, 0.1)',
          borderRadius: '50%',
          animation: 'spin 3s linear infinite',
          '@keyframes spin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' }
          }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(255, 215, 0, 0.08)',
          borderRadius: '50%',
          animation: 'spinReverse 4s linear infinite',
          '@keyframes spinReverse': {
            from: { transform: 'rotate(360deg)' },
            to: { transform: 'rotate(0deg)' }
          }
        }}
      />
      
      <AnimatedBox animation="bounce" delay={0.3} sx={{ mb: 2 }}>
        <SecurityIcon
          sx={{
            fontSize: '4rem',
            color: '#FFD700',
            filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.5))'
          }}
        />
      </AnimatedBox>
      
      <AnimatedBox animation="fadeInUp" delay={0.5}>
        <Typography
          variant="h1"
          sx={{
            color: '#FFD700',
            textAlign: 'center',
            mb: 3,
            textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
            fontSize: { xs: '2rem', sm: '2.5rem' }
          }}
        >
          NINJA LOADING
        </Typography>
      </AnimatedBox>
      
      <CircularProgress
        size={60}
        sx={{
          color: '#FFD700',
          mb: 2
        }}
      />
      
      <AnimatedBox animation="fadeInUp" delay={0.8}>
        <Typography
          variant="body1"
          sx={{
            color: '#FFFFFF',
            textAlign: 'center',
            opacity: 0.8
          }}
        >
          Preparando la fiesta ninja...
        </Typography>
      </AnimatedBox>
    </Box>
  );
};

export default LoadingScreen;