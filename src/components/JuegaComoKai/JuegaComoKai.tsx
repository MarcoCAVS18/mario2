// src/components/JuegaComoKai/JuegaComoKai.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import GameBoard from './GameBoard';
import { useMemoryGame } from '../../hooks/useMemoryGame';
import CongratulationsModal from '../CongratulationsModal';

const JuegaComoKai: React.FC = () => {
  const navigate = useNavigate();
  const { cards, moves, matches, gameWon, handleCardClick, resetGame, gameStarted } = useMemoryGame();

  const ninjaButtonStyles = {
    py: 2.5,
    px: 4,
    fontSize: '1.1rem',
    fontFamily: '"ABeeZee", sans-serif',
    textTransform: 'none',
    borderRadius: 4,
    fontWeight: 700,
    letterSpacing: 1,
    backgroundColor: '#111',
    color: '#FFE600',
    border: '2px solid #CC2A00',
    boxShadow: '0 0 12px #CC2A00',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60px',
    '&:hover': {
      backgroundColor: '#CC2A00',
      color: '#111',
      boxShadow: '0 0 16px #E65100',
      transform: 'translateY(-2px) scale(1.03)',
    },
    '&:active': {
      boxShadow: 'inset 0 0 12px #000',
      transform: 'translateY(0) scale(0.98)',
    }
  };

  return (
    <Box sx={{ 
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Botón para volver */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 15, sm: 25 },
          left: { xs: 15, sm: 25 },
          zIndex: 10
        }}
      >
        <Box
          onClick={() => navigate('/')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            color: '#FFE600',
            fontFamily: '"ABeeZee", sans-serif',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 700,
            '&:hover': {
              color: '#CC2A00'
            },
            transition: 'color 0.3s ease'
          }}
        >
          <ArrowBackIcon sx={{ mr: 1, fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
          VOLVER
        </Box>
      </Box>

      {/* Contenedor principal centrado */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px',
          px: { xs: 1, sm: 2 }
        }}
      >
        {/* Título principal */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"ABeeZee", sans-serif',
            fontWeight: 900,
            color: '#FFE600',
            mb: gameStarted ? 3 : 6,
            fontSize: { 
              xs: gameStarted ? '1.8rem' : '2.5rem', 
              sm: gameStarted ? '2.2rem' : '3.5rem', 
              md: gameStarted ? '2.5rem' : '4.5rem' 
            },
            textShadow: '4px 4px 0 #CC2A00, 8px 8px 0 #000',
            lineHeight: 0.9,
            letterSpacing: { xs: 1, sm: 2, md: 3 },
            textAlign: 'center'
          }}
        >
          JUEGA COMO KAI
        </Typography>

        {/* Subtítulo  */}
        {!gameStarted && (
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"ABeeZee", sans-serif',
              fontWeight: 700,
              color: '#fff',
              mb: 4,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              textShadow: '2px 2px 0 #000',
              letterSpacing: 1,
              textAlign: 'center'
            }}
          >
            ¡Encuentra los pares de cartas ninja!
          </Typography>
        )}

        {/* Botón de inicio */}
        {!gameStarted && (
          <Box
            onClick={() => handleCardClick(-1)}
            sx={{
              ...ninjaButtonStyles,
              fontSize: '1.3rem',
              px: 6,
              py: 3,
              minHeight: '80px'
            }}
          >
            ¡COMENZAR MISIÓN!
          </Box>
        )}

        {/* Tablero de juego */}
        {gameStarted && (
          <>
            <GameBoard 
              cards={cards} 
              handleCardClick={handleCardClick} 
              gameStarted={gameStarted} 
            />
            
            {/* Estadísticas */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                width: '100%',
                mt: 2
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  border: '2px solid #FFE600',
                  borderRadius: 2,
                  px: { xs: 2, sm: 3 },
                  py: { xs: 0.8, sm: 1 },
                  boxShadow: '0 0 8px rgba(255, 230, 0, 0.3)'
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#FFE600',
                    fontFamily: '"ABeeZee", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '0.85rem', sm: '1rem' },
                    letterSpacing: 0.5
                  }}
                >
                  Movimientos: {moves}
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  border: '2px solid #CC2A00',
                  borderRadius: 2,
                  px: { xs: 2, sm: 3 },
                  py: { xs: 0.8, sm: 1 },
                  boxShadow: '0 0 8px rgba(204, 42, 0, 0.3)'
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#CC2A00',
                    fontFamily: '"ABeeZee", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '0.85rem', sm: '1rem' },
                    letterSpacing: 0.5
                  }}
                >
                  Pares: {matches} / 12
                </Typography>
              </Box>
            </Box>
          </>
        )}

        {/* Modal de felicitaciones */}
        <CongratulationsModal 
          open={gameWon} 
          onClose={resetGame} 
          moves={moves} 
        />
      </Box>
    </Box>
  );
};

export default JuegaComoKai;