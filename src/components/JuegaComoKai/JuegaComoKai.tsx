// src/components/JuegaComoKai/JuegaComoKai.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import GameBoard from './GameBoard';
import { useMemoryGame } from '../../hooks/useMemoryGame';
import CongratulationsModal from '../CongratulationsModal';
import AnimatedBox from '../AnimatedBox';

const JuegaComoKai: React.FC = () => {
  const navigate = useNavigate();
  const { cards, moves, matches, gameWon, handleCardClick, resetGame, restartGame, gameStarted } = useMemoryGame();

  const ninjaButtonStyles = {
    py: 2,
    px: 3.5,
    fontSize: '1rem',
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
    minHeight: '50px',
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
      overflow: 'hidden',
      pt: { xs: 8, sm: 6 }, // Padding top para dar espacio al botón volver
    }}>
      {/* Botón para volver - Fijo en esquina superior izquierda */}
<Box
        sx={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 1000
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
            fontSize: '1rem',
            fontWeight: 700,
            '&:hover': {
              color: '#CC2A00'
            },
            transition: 'color 0.3s ease'
          }}
        >
          <ArrowBackIcon sx={{ mr: 1 }} />
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
        {/* Título principal - Reducido cuando está jugando */}
        <AnimatedBox animation="fadeInDown" delay={0.3}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"ABeeZee", sans-serif',
              fontWeight: 900,
              color: '#FFE600',
              mb: gameStarted ? 2 : 4,
              fontSize: { 
                xs: gameStarted ? '1.6rem' : '2.2rem', 
                sm: gameStarted ? '2rem' : '3rem', 
                md: gameStarted ? '2.3rem' : '4rem' 
              },
              textShadow: '4px 4px 0 #CC2A00, 8px 8px 0 #000',
              lineHeight: 0.9,
              letterSpacing: { xs: 1, sm: 2, md: 3 },
              textAlign: 'center'
            }}
          >
            JUEGA COMO KAI
          </Typography>
        </AnimatedBox>

        {/* Subtítulo - solo cuando no está jugando */}
        {!gameStarted && (
          <AnimatedBox animation="fadeInUp" delay={0.5}>
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
          </AnimatedBox>
        )}

        {/* Botón de inicio - Más pequeño */}
        {!gameStarted && (
          <AnimatedBox animation="pulse" delay={0.7}>
            <Box
              onClick={() => handleCardClick(-1)}
              sx={{
                ...ninjaButtonStyles,
                fontSize: '1.1rem',
                px: 4,
                py: 2.5,
                minHeight: '60px'
              }}
            >
              ¡COMENZAR MISIÓN!
            </Box>
          </AnimatedBox>
        )}

        {/* Tablero de juego */}
        {gameStarted && (
          <AnimatedBox animation="fadeInUp" delay={0.2}>
            <GameBoard 
              cards={cards} 
              handleCardClick={handleCardClick} 
              gameStarted={gameStarted} 
            />
            
            {/* Estadísticas debajo del board */}
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
          </AnimatedBox>
        )}

        {/* Modal de felicitaciones */}
        <CongratulationsModal 
          open={gameWon} 
          onPlayAgain={restartGame}
          onClose={resetGame}
          moves={moves} 
        />
      </Box>
    </Box>
  );
};

export default JuegaComoKai;