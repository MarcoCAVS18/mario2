// src/components/JuegaComoKai/GameStats.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';

interface GameStatsProps {
  moves: number;
  matches: number;
  gameWon: boolean;
}

const GameStats: React.FC<GameStatsProps> = ({ moves, matches }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        mb: 2,
        px: 2
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#FFE600', 
          fontWeight: 'bold',
          fontSize: { xs: '0.9rem', sm: '1rem' }
        }}
      >
        Movimientos: {moves}
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#FFE600', 
          fontWeight: 'bold',
          fontSize: { xs: '0.9rem', sm: '1rem' }
        }}
      >
        Pares: {matches} / 12
      </Typography>
    </Box>
  );
};

export default GameStats;