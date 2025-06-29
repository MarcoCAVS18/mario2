// src/components/JuegaComoKai/GameBoard.tsx
import React from 'react';
import { Box } from '@mui/material';
import Card from './Card';

interface GameBoardProps {
  cards?: any[];
  handleCardClick?: (index: number) => void;
  gameStarted?: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({ 
  cards = [], 
  handleCardClick = () => {}, 
  gameStarted = false 
}) => {
  if (!cards || cards.length === 0) {
    return (
      <Box sx={{ color: '#FFE600', textAlign: 'center', p: 2 }}>
        Preparando misión ninja...
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { 
          xs: 'repeat(4, 1fr)', // 4x4 en móvil (cuadrado perfecto)
          sm: 'repeat(4, 1fr)', // 4x4 en tablet también
          md: 'repeat(8, 1fr)', // 8x2 en desktop (más horizontal)
          lg: 'repeat(8, 1fr)'  // 8x2 en pantallas grandes
        },
        gap: { xs: 1.2, sm: 1.5, md: 2, lg: 2.5 },
        justifyItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 'fit-content',
        margin: '0 auto'
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={`card-${index}`}
          card={card}
          onClick={() => handleCardClick(index)}
          gameStarted={gameStarted}
        />
      ))}
    </Box>
  );
};

export default GameBoard;