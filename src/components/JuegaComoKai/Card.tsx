// src/components/JuegaComoKai/Card.tsx

import React from 'react';
import { Box, Paper } from '@mui/material';
import cardBackImage from '../../assets/images/cards/back.png';
import flipSound from '../../assets/sounds/flip.mp3';

interface CardProps {
  card?: any;
  onClick?: () => void;
  gameStarted?: boolean;
}

const Card: React.FC<CardProps> = ({ card, onClick, gameStarted }) => {
  // Función para reproducir sonido de voltear carta
  const playFlipSound = () => {
    try {
      const audio = new Audio(flipSound);
      audio.volume = 0.4; // Volumen moderado
      audio.play().catch(error => {
        console.log('No se pudo reproducir el sonido flip:', error);
      });
    } catch (error) {
      console.log('Error al crear el audio flip:', error);
    }
  };

  // Manejar click con sonido
  const handleCardClick = () => {
    // Solo reproducir sonido si la carta se puede voltear
    if (onClick && !card?.matched && !card?.flipped && gameStarted) {
      playFlipSound();
      onClick();
    }
  };

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
          color: '#FFE600',
          userSelect: 'none'
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
      onClick={handleCardClick}
      sx={{
        width: { xs: '65px', sm: '75px', md: '90px', lg: '100px' },
        height: { xs: '95px', sm: '110px', md: '130px', lg: '145px' },
        cursor: (isMatched || isFlipped || !gameStarted) ? 'default' : 'pointer',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s ease-in-out',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        backgroundColor: 'transparent',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
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
          userSelect: 'none'
        }}
      >
        <img
          src={cardBackImage}
          alt="carta boca abajo"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            WebkitTouchCallout: 'none'
          }}
          draggable={false}
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
          userSelect: 'none'
        }}
      >
        <img
          src={cardFrontImage}
          alt="carta volteada"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            WebkitTouchCallout: 'none'
          }}
          draggable={false}
        />
      </Box>
    </Paper>
  );
};

export default Card;