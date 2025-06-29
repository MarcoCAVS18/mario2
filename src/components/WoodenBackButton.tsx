// src/components/WoodenBackButton.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

interface WoodenBackButtonProps {
  text?: string;
  onClick?: () => void;
}

const WoodenBackButton: React.FC<WoodenBackButtonProps> = ({ 
  text = "VOLVER",
  onClick 
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        width: 'fit-content',
        height: '50px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px) scale(1.05)',
          filter: 'brightness(1.1)',
        },
        '&:active': {
          transform: 'translateY(0) scale(0.95)',
        }
      }}
    >
      {/* Extremo izquierdo */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '50px',
          height: '50px',
          background: `
            radial-gradient(ellipse at 30% 30%, #D2691E 0%, #A0522D 30%, #8B4513 60%, #654321 100%)
          `,
          borderRadius: '50%',
          border: '2px solid #5D4037',
          boxShadow: `
            0 6px 12px rgba(0, 0, 0, 0.4),
            inset 0 3px 6px rgba(255, 255, 255, 0.2),
            inset 0 -3px 6px rgba(0, 0, 0, 0.3)
          `,
          zIndex: 3
        }}
      />

      {/* Extremo derecho */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50px',
          height: '50px',
          background: `
            radial-gradient(ellipse at 70% 30%, #D2691E 0%, #A0522D 30%, #8B4513 60%, #654321 100%)
          `,
          borderRadius: '50%',
          border: '2px solid #5D4037',
          boxShadow: `
            0 6px 12px rgba(0, 0, 0, 0.4),
            inset 0 3px 6px rgba(255, 255, 255, 0.2),
            inset 0 -3px 6px rgba(0, 0, 0, 0.3)
          `,
          zIndex: 3
        }}
      />

      {/* Cuerpo central */}
      <Box
        sx={{
          position: 'absolute',
          left: '25px',
          right: '25px',
          top: 0,
          height: '50px',
          background: `
            linear-gradient(180deg, 
              #D2691E 0%, 
              #A0522D 25%, 
              #8B4513 50%, 
              #A0522D 75%, 
              #D2691E 100%
            )
          `,
          border: '2px solid #5D4037',
          borderLeft: 'none',
          borderRight: 'none',
          boxShadow: `
            0 6px 12px rgba(0, 0, 0, 0.4),
            inset 0 3px 6px rgba(255, 255, 255, 0.2),
            inset 0 -3px 6px rgba(0, 0, 0, 0.3)
          `,
          zIndex: 2,
          minWidth: '120px'
        }}
      />

      {/* Círculo del icono */}
      <Box
        sx={{
          position: 'absolute',
          left: '8px',
          top: '8px',
          width: '34px',
          height: '34px',
          background: `
            radial-gradient(circle at 30% 30%, #8B4513 0%, #654321 40%, #3E2723 100%)
          `,
          borderRadius: '50%',
          border: '2px solid #FFD700',
          boxShadow: `
            0 4px 8px rgba(0, 0, 0, 0.5),
            inset 0 2px 4px rgba(0, 0, 0, 0.8),
            inset 0 -2px 4px rgba(255, 255, 255, 0.1)
          `,
          zIndex: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ArrowBackIcon
          sx={{
            color: '#FFD700',
            fontSize: '1.2rem',
            filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.8))'
          }}
        />
      </Box>

      {/* Texto */}
      <Box
        sx={{
          position: 'absolute',
          left: '50px',
          right: '10px',
          top: 0,
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 4
        }}
      >
        <Typography
          sx={{
            fontFamily: '"ABeeZee", sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            color: '#FFD700',
            textShadow: `
              1px 1px 0 #8B4513,
              2px 2px 0 #654321,
              3px 3px 4px rgba(0, 0, 0, 0.8)
            `,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            userSelect: 'none'
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default WoodenBackButton;