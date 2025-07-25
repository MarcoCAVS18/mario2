// src/components/CongratulationsModal.tsx

import React from 'react';
import { Dialog, DialogContent, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CongratulationsModalProps {
  open: boolean;
  onClose: () => void;
  onPlayAgain: () => void;
  moves: number;
}

const CongratulationsModal: React.FC<CongratulationsModalProps> = ({ 
  open, 
  onClose, 
  onPlayAgain, 
  moves 
}) => {
  const navigate = useNavigate();

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
    userSelect: 'none',
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

  const invitationButtonStyles = {
    ...ninjaButtonStyles,
    backgroundColor: '#4CAF50',
    border: '2px solid #FFE600',
    boxShadow: '0 0 12px #4CAF50',
    '&:hover': {
      backgroundColor: '#FFE600',
      color: '#111',
      boxShadow: '0 0 16px #FFC107',
      transform: 'translateY(-2px) scale(1.03)',
    },
    '&:active': {
      boxShadow: 'inset 0 0 12px #000',
      transform: 'translateY(0) scale(0.98)',
    }
  };

  const handleGoToInvitations = () => {
    onClose();
    navigate('/invitacion');
  };

  const handlePlayAgain = () => {
    onPlayAgain();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          border: '3px solid #FFE600',
          borderRadius: '12px',
          boxShadow: '0 0 20px #FFE600',
          userSelect: 'none'
        }
      }}
    >
      <DialogContent sx={{ 
        textAlign: 'center', 
        p: 4,
        userSelect: 'none'
      }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"ABeeZee", sans-serif',
            fontWeight: 900,
            color: '#FFE600',
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem' },
            textShadow: '3px 3px 0 #CC2A00, 6px 6px 0 #000',
            lineHeight: 1,
            letterSpacing: 2,
            userSelect: 'none'
          }}
        >
          ¡FELICITACIONES!
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: '"ABeeZee", sans-serif',
            fontWeight: 700,
            color: '#fff',
            mb: 3,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            textShadow: '2px 2px 0 #000',
            letterSpacing: 1,
            userSelect: 'none'
          }}
        >
          ¡Misión ninja completada!
        </Typography>

        <Typography
          sx={{
            fontFamily: '"ABeeZee", sans-serif',
            fontWeight: 700,
            color: '#CC2A00',
            mb: 4,
            fontSize: '1.3rem',
            textShadow: '1px 1px 0 #000',
            userSelect: 'none'
          }}
        >
          Completaste el juego en {moves} movimientos
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            onClick={handlePlayAgain}
            sx={{
              ...ninjaButtonStyles,
              width: { xs: '100%', sm: 'auto' },
              minWidth: { sm: '200px' }
            }}
          >
            ¡JUGAR DE NUEVO!
          </Box>

          <Box
            onClick={handleGoToInvitations}
            sx={{
              ...invitationButtonStyles,
              width: { xs: '100%', sm: 'auto' },
              minWidth: { sm: '200px' }
            }}
          >
            TU INVITACIÓN
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CongratulationsModal;
