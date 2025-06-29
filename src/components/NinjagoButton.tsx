// src/components/NinjagoButton.tsx

import React from 'react';
import { Box, SxProps } from '@mui/material';

interface NinjagoButtonProps {
  children?: React.ReactNode; // Hacer children opcional
  onClick?: () => void;
  sx?: SxProps;
  disabled?: boolean;
  buttonType: 'invitacion' | 'juegoninja' | 'curiosidades' | 'comenzar';
}

const NinjagoButton: React.FC<NinjagoButtonProps> = ({
  children,
  onClick,
  sx = {},
  disabled = false,
  buttonType
}) => {
  // Función para obtener el texto por defecto según el tipo
  const getDefaultText = () => {
    switch (buttonType) {
      case 'invitacion':
        return 'VER INVITACIÓN';
      case 'juegoninja':
        return 'JUEGA COMO KAI';
      case 'curiosidades':
        return 'CURIOSIDADES NINJA';
      case 'comenzar':
        return 'COMENZAR MISIÓN';
      default:
        return 'BOTÓN NINJA';
    }
  };

  // Función para generar SVG simple como fallback
  const generateFallbackSVG = () => {
    const colors = {
      invitacion: { bg: '#4CAF50', border: '#FFE600' },
      juegoninja: { bg: '#CC2A00', border: '#FFE600' },
      curiosidades: { bg: '#9C27B0', border: '#FFE600' },
      comenzar: { bg: '#FF9800', border: '#FFE600' }
    };

    const color = colors[buttonType];
    
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="80" viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${color.bg};stop-opacity:1" />
            <stop offset="100%" style="stop-color:#000;stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="390" height="70" rx="10" ry="10" 
              fill="url(#grad)" 
              stroke="${color.border}" 
              stroke-width="3"
              filter="drop-shadow(2px 4px 8px rgba(0,0,0,0.4))" />
        <rect x="10" y="10" width="380" height="60" rx="8" ry="8" 
              fill="none" 
              stroke="${color.border}" 
              stroke-width="1"
              opacity="0.5" />
      </svg>
    `)}`;
  };

  return (
    <Box
      onClick={disabled ? undefined : onClick}
      sx={{
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        transition: 'all 0.3s ease-in-out',
        opacity: disabled ? 0.6 : 1,
        display: 'inline-block',
        width: 'fit-content',
        height: 'fit-content',
        margin: 0,
        padding: 0,
        lineHeight: 0,
        '&:hover': disabled ? {} : {
          transform: 'translateY(-2px) scale(1.03)',
          filter: 'brightness(1.1) drop-shadow(0 4px 12px rgba(255,230,0,0.4))',
        },
        '&:active': disabled ? {} : {
          transform: 'translateY(0) scale(0.98)',
          filter: 'brightness(0.9)',
        },
        ...sx
      }}
    >
      {/* SVG generado como fallback */}
      <Box
        component="img"
        src={generateFallbackSVG()}
        alt={`${buttonType} Button`}
        sx={{
          display: 'block',
          width: { xs: '300px', sm: '350px', md: '400px' },
          height: 'auto',
          margin: 0,
          padding: 0,
          verticalAlign: 'top',
          filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.4))',
        }}
      />

      {/* Contenido del botón encima del SVG */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          width: '80%',
          textAlign: 'center',
          fontFamily: '"ABeeZee", sans-serif',
          fontWeight: 700,
          fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
          color: '#FFE600',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          letterSpacing: 1,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1
        }}
      >
        {children || getDefaultText()}
      </Box>
    </Box>
  );
};

export default NinjagoButton;