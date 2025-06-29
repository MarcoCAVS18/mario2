// src/components/SimpleWoodenScrollButton.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';

interface SimpleWoodenScrollButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const SimpleWoodenScrollButton: React.FC<SimpleWoodenScrollButtonProps> = ({ 
  text, 
  icon, 
  onClick 
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '450px',
        height: '70px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        mb: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px) scale(1.02)',
        },
        '&:active': {
          transform: 'translateY(0) scale(0.98)',
        }
      }}
    >
      {/* Extremo izquierdo redondo */}
      <Box
        sx={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(145deg, #CD853F 0%, #A0522D 50%, #8B4513 100%)',
          border: '3px solid #654321',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 3,
          flexShrink: 0
        }}
      >
        {/* Círculo interior del icono */}
        <Box
          sx={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #6D4C41 100%)',
            border: '2px solid #FFD700',
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ color: '#FFD700', fontSize: '1.5rem' }}>
            {icon}
          </Box>
        </Box>
        
        {/* Clavo decorativo superior */}
        <Box
          sx={{
            position: 'absolute',
            top: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #FFD700 0%, #DAA520 100%)',
            border: '1px solid #8B4513',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        />
        
        {/* Clavo decorativo inferior */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #FFD700 0%, #DAA520 100%)',
            border: '1px solid #8B4513',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        />
      </Box>

      {/* Cuerpo rectangular del pergamino */}
      <Box
        sx={{
          flex: 1,
          height: '70px',
          background: 'linear-gradient(180deg, #CD853F 0%, #A0522D 30%, #8B4513 70%, #A0522D 100%)',
          border: '3px solid #654321',
          borderLeft: 'none',
          borderRight: 'none',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
          ml: '-3px',
          mr: '-3px'
        }}
      >
        {/* Brillo superior */}
        <Box
          sx={{
            position: 'absolute',
            top: '4px',
            left: '10px',
            right: '10px',
            height: '15px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%)',
            borderRadius: '3px'
          }}
        />
        
        {/* Texto */}
        <Typography
          sx={{
            fontFamily: '"ABeeZee", sans-serif',
            fontWeight: 900,
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.4rem' },
            color: '#FFD700',
            textShadow: '2px 2px 0 #8B4513, 4px 4px 0 #654321',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            userSelect: 'none',
            textAlign: 'center',
            zIndex: 1,
            position: 'relative'
          }}
        >
          {text}
        </Typography>
      </Box>

      {/* Extremo derecho redondo */}
      <Box
        sx={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(145deg, #CD853F 0%, #A0522D 50%, #8B4513 100%)',
          border: '3px solid #654321',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 3,
          flexShrink: 0
        }}
      >
        {/* Clavo decorativo superior */}
        <Box
          sx={{
            position: 'absolute',
            top: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #FFD700 0%, #DAA520 100%)',
            border: '1px solid #8B4513',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        />
        
        {/* Clavo decorativo inferior */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #FFD700 0%, #DAA520 100%)',
            border: '1px solid #8B4513',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        />
      </Box>
    </Box>
  );
};

export default SimpleWoodenScrollButton;