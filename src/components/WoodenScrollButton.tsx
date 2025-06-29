// src/components/WoodenScrollButton.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';

interface WoodenScrollButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const WoodenScrollButton: React.FC<WoodenScrollButtonProps> = ({ 
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
        maxWidth: '500px',
        height: '80px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px) scale(1.02)',
          filter: 'brightness(1.1)',
        },
        '&:active': {
          transform: 'translateY(0) scale(0.98)',
        }
      }}
    >
      {/* Extremo izquierdo del pergamino */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '80px',
          height: '80px',
          background: `
            radial-gradient(ellipse at 30% 30%, #D2691E 0%, #A0522D 30%, #8B4513 60%, #654321 100%)
          `,
          borderRadius: '50%',
          border: '2px solid #5D4037',
          boxShadow: `
            0 8px 16px rgba(0, 0, 0, 0.4),
            inset 0 4px 8px rgba(255, 255, 255, 0.2),
            inset 0 -4px 8px rgba(0, 0, 0, 0.3),
            inset 4px 0 8px rgba(255, 255, 255, 0.1),
            inset -4px 0 8px rgba(0, 0, 0, 0.2)
          `,
          zIndex: 3,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '6px',
            left: '6px',
            right: '6px',
            bottom: '6px',
            background: `
              radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)
            `,
            borderRadius: '50%',
          }
        }}
      />

      {/* Extremo derecho del pergamino */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '80px',
          height: '80px',
          background: `
            radial-gradient(ellipse at 70% 30%, #D2691E 0%, #A0522D 30%, #8B4513 60%, #654321 100%)
          `,
          borderRadius: '50%',
          border: '2px solid #5D4037',
          boxShadow: `
            0 8px 16px rgba(0, 0, 0, 0.4),
            inset 0 4px 8px rgba(255, 255, 255, 0.2),
            inset 0 -4px 8px rgba(0, 0, 0, 0.3),
            inset 4px 0 8px rgba(255, 255, 255, 0.1),
            inset -4px 0 8px rgba(0, 0, 0, 0.2)
          `,
          zIndex: 3,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '6px',
            left: '6px',
            right: '6px',
            bottom: '6px',
            background: `
              radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)
            `,
            borderRadius: '50%',
          }
        }}
      />

      {/* Cuerpo central del pergamino */}
      <Box
        sx={{
          position: 'absolute',
          left: '40px',
          right: '40px',
          top: 0,
          height: '80px',
          background: `
            linear-gradient(180deg, 
              #D2691E 0%, 
              #CD853F 5%, 
              #A0522D 15%, 
              #8B4513 25%, 
              #654321 40%, 
              #5D4037 50%, 
              #654321 60%, 
              #8B4513 75%, 
              #A0522D 85%, 
              #CD853F 95%, 
              #D2691E 100%
            )
          `,
          border: '2px solid #5D4037',
          borderLeft: 'none',
          borderRight: 'none',
          boxShadow: `
            0 8px 16px rgba(0, 0, 0, 0.4),
            inset 0 4px 8px rgba(255, 255, 255, 0.2),
            inset 0 -4px 8px rgba(0, 0, 0, 0.3)
          `,
          zIndex: 2,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '6px',
            left: 0,
            right: 0,
            height: '20px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '6px',
            left: 0,
            right: 0,
            height: '20px',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%)',
          }
        }}
      />

      {/* Reborde superior del pergamino */}
      <Box
        sx={{
          position: 'absolute',
          left: '45px',
          right: '45px',
          top: '-2px',
          height: '6px',
          background: `
            linear-gradient(90deg, 
              #8B4513 0%, 
              #A0522D 25%, 
              #CD853F 50%, 
              #A0522D 75%, 
              #8B4513 100%
            )
          `,
          borderRadius: '3px',
          boxShadow: `
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.3)
          `,
          zIndex: 4
        }}
      />

      {/* Reborde inferior del pergamino */}
      <Box
        sx={{
          position: 'absolute',
          left: '45px',
          right: '45px',
          bottom: '-2px',
          height: '6px',
          background: `
            linear-gradient(90deg, 
              #8B4513 0%, 
              #A0522D 25%, 
              #CD853F 50%, 
              #A0522D 75%, 
              #8B4513 100%
            )
          `,
          borderRadius: '3px',
          boxShadow: `
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.3)
          `,
          zIndex: 4
        }}
      />

      {/* Clavos decorativos extremo izquierdo */}
      <Box
        sx={{
          position: 'absolute',
          left: '15px',
          top: '15px',
          width: '12px',
          height: '12px',
          background: `
            radial-gradient(circle at 30% 30%, #FFD700 0%, #DAA520 50%, #B8860B 100%)
          `,
          borderRadius: '50%',
          border: '2px solid #8B4513',
          boxShadow: `
            0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(0, 0, 0, 0.4)
          `,
          zIndex: 5
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          left: '15px',
          bottom: '15px',
          width: '12px',
          height: '12px',
          background: `
            radial-gradient(circle at 30% 30%, #FFD700 0%, #DAA520 50%, #B8860B 100%)
          `,
          borderRadius: '50%',
          border: '2px solid #8B4513',
          boxShadow: `
            0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(0, 0, 0, 0.4)
          `,
          zIndex: 5
        }}
      />

      {/* Clavos decorativos extremo derecho */}
      <Box
        sx={{
          position: 'absolute',
          right: '15px',
          top: '15px',
          width: '12px',
          height: '12px',
          background: `
            radial-gradient(circle at 30% 30%, #FFD700 0%, #DAA520 50%, #B8860B 100%)
          `,
          borderRadius: '50%',
          border: '2px solid #8B4513',
          boxShadow: `
            0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(0, 0, 0, 0.4)
          `,
          zIndex: 5
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          right: '15px',
          bottom: '15px',
          width: '12px',
          height: '12px',
          background: `
            radial-gradient(circle at 30% 30%, #FFD700 0%, #DAA520 50%, #B8860B 100%)
          `,
          borderRadius: '50%',
          border: '2px solid #8B4513',
          boxShadow: `
            0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(0, 0, 0, 0.4)
          `,
          zIndex: 5
        }}
      />

      {/* Círculo del icono */}
      <Box
        sx={{
          position: 'absolute',
          left: '10px',
          top: '10px',
          width: '60px',
          height: '60px',
          background: `
            radial-gradient(circle at 30% 30%, #8B4513 0%, #654321 40%, #3E2723 100%)
          `,
          borderRadius: '50%',
          border: '3px solid #FFD700',
          boxShadow: `
            0 6px 12px rgba(0, 0, 0, 0.5),
            inset 0 3px 6px rgba(0, 0, 0, 0.8),
            inset 0 -3px 6px rgba(255, 255, 255, 0.1)
          `,
          zIndex: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '4px',
            left: '4px',
            right: '4px',
            bottom: '4px',
            background: `
              radial-gradient(circle at 35% 35%, rgba(255, 215, 0, 0.3) 0%, transparent 70%)
            `,
            borderRadius: '50%',
            border: '1px solid rgba(255, 215, 0, 0.5)'
          }
        }}
      >
        {/* Icono */}
        <Box
          sx={{
            color: '#FFD700',
            fontSize: '1.8rem',
            zIndex: 7,
            filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.8))',
            position: 'relative'
          }}
        >
          {icon}
        </Box>
      </Box>

      {/* Texto del botón */}
      <Box
        sx={{
          position: 'absolute',
          left: '90px',
          right: '20px',
          top: 0,
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 4
        }}
      >
        <Typography
          sx={{
            fontFamily: '"ABeeZee", sans-serif',
            fontWeight: 900,
            fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
            color: '#FFD700',
            textShadow: `
              2px 2px 0 #8B4513,
              4px 4px 0 #654321,
              6px 6px 8px rgba(0, 0, 0, 0.8)
            `,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            userSelect: 'none',
            lineHeight: 1
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default WoodenScrollButton;