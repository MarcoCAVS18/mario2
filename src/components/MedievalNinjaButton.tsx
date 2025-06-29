// src/components/MedievalNinjaButton.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface MedievalNinjaButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const MedievalNinjaButton: React.FC<MedievalNinjaButtonProps> = ({
  text,
  icon,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        maxWidth: 400,
        background: '#5c3e17',
        border: '5px solid #d4af37',
        borderRadius: '10px',
        padding: '10px 20px',
        boxShadow:
          '0 4px 10px rgba(0,0,0,0.6), inset 0 0 10px #f7d774, inset 0 0 5px #fff4c1',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow:
            '0 6px 16px rgba(0,0,0,0.6), inset 0 0 14px #f7d774',
        },
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '10px',
          background: '#5c3e17',
          border: '3px solid #d4af37',
          borderRadius: '10px',
        },
        '&::before': {
          left: 0,
        },
        '&::after': {
          right: 0,
        },
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #fcd253, #c2922b)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #5a3e1b',
          boxShadow: '0 3px 6px rgba(0,0,0,0.4)',
          mr: 2,
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          fontFamily: 'Cinzel, serif',
          fontWeight: 700,
          fontSize: '1.3rem',
          color: '#ffecb3',
          textShadow: '1px 1px 2px #000',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default MedievalNinjaButton;
