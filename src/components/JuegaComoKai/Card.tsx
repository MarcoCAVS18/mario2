// src/components/JuegaComoKai/Card.tsx

import React from 'react';
import { Box, Paper } from '@mui/material';
import cardBackImage from '../../assets/images/cards/back.png';

interface CardProps {
  card?: any;
  onClick?: () => void;
  gameStarted?: boolean;
}

const Card: React.FC<CardProps> = ({ card, onClick, gameStarted }) => {
  if (!card) {
    return (
      <Paper
        sx={{
          width: { xs: '65px', sm: '75px', md: '90px', lg: '100px' },
          height: { xs: '95px', sm: '110px', md: '130px', lg: '145px' },
          backgroundColor: '#333',
          border: '2px solid #CC2A00',
          borderRadius: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFE600'
        }}
      >
        🥷
      </Paper>
    );
  }

  const isFlipped = card.flipped || false;
  const isMatched = card.matched || false;
  const cardFrontImage = card.image || '';

  return (
    <Paper
      elevation={isFlipped ? 4 : 2}
      onClick={() => {
        if (onClick && !isMatched && !isFlipped && gameStarted) {
          onClick();
        }
      }}
      sx={{
        width: { xs: '65px', sm: '75px', md: '90px', lg: '100px' },
        height: { xs: '95px', sm: '110px', md: '130px', lg: '145px' },
        cursor: (isMatched || isFlipped || !gameStarted) ? 'default' : 'pointer',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s ease-in-out',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        backgroundColor: 'transparent',
        '&:hover': {
          transform: (!isMatched && !isFlipped && gameStarted) 
            ? 'rotateY(0deg) scale(1.05)' 
            : isFlipped 
              ? 'rotateY(180deg)' 
              : 'rotateY(0deg)'
        }
      }}
    >
      {/* Cara frontal - back.png */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          borderRadius: 1.5,
          overflow: 'hidden',
          border: `2px solid #CC2A00`,
          boxShadow: '0 0 6px rgba(204, 42, 0, 0.3)',
        }}
      >
        <img
          src={cardBackImage}
          alt="carta boca abajo"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }}
        />
      </Box>

      {/* Cara trasera */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          borderRadius: 1.5,
          overflow: 'hidden',
          border: isMatched ? '2px solid #FFE600' : '2px solid #4CAF50',
          boxShadow: isMatched ? '0 0 8px #FFE600' : '0 0 6px rgba(76, 175, 80, 0.3)',
          backgroundColor: isMatched ? '#4CAF50' : '#111',
        }}
      >
        <img
          src={cardFrontImage}
          alt="carta volteada"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }}
        />
      </Box>
    </Paper>
  );
};

export default Card;