// src/components/Invitation.tsx

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { WhatsApp as WhatsAppIcon, ArrowBack as ArrowBackIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';
import ninjaImage from '../assets/images/others/ninja-invitacion.png';

const Invitation: React.FC = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = '5491112345678';
    const message = 'Hola! Confirmando mi asistencia a la fiesta ninja de Mario. ¡Nos vemos ahí! 🥷🎉';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/nqYVGYK6yvbphavb7', '_blank');
  };

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
    <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Botón para volver */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
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

      {/* Imagen ninja centrada en móviles */}
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          left: { xs: '60%', md: 'auto' },
          right: { xs: 'auto', md: 0 },
          transform: { 
            xs: 'translate(-50%, -50%)', 
            md: 'translateY(-50%)' 
          },
          zIndex: 1,
          width: { xs: '450px', sm: '500px', md: '500px' },
          height: 'auto'
        }}
      >
        <img
          src={ninjaImage}
          alt="Ninja invitación"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(4px 4px 12px rgba(0,0,0,0.5))'
          }}
        />
      </Box>

      {/* Contenedor superior - Título e invitación */}
      <Box
        sx={{
          flex: '0 0 auto',
          pt: { xs: 10, md: 12 },
          pl: { xs: 3, md: 6 },
          pr: { xs: 3, md: 20 },
          zIndex: 2
        }}
      >
        <Box sx={{ textAlign: 'left' }}>
          {/* Título principal */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"ABeeZee", sans-serif',
              fontWeight: 900,
              color: '#FFE600',
              mb: 2,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
              textShadow: '3px 3px 0 #CC2A00, 6px 6px 0 #000',
              lineHeight: 1,
              letterSpacing: 2
            }}
          >
            ¡ESTÁS INVITADO A MI
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"ABeeZee", sans-serif',
              fontWeight: 900,
              color: '#CC2A00',
              mb: 3,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
              textShadow: '3px 3px 0 #FFE600, 6px 6px 0 #000',
              lineHeight: 1,
              letterSpacing: 2
            }}
          >
            FIESTA NINJA!
          </Typography>

          {/* Nombre */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"ABeeZee", sans-serif',
              fontWeight: 900,
              color: '#FFE600',
              fontSize: { xs: '4.5rem', sm: '4.5rem', md: '6rem' },
              textShadow: '4px 4px 0 #CC2A00, 8px 8px 0 #000',
              lineHeight: 0.8,
              letterSpacing: 3
            }}
          >
            MARIO
          </Typography>
        </Box>
      </Box>

      {/* Espacio flexible */}
      <Box sx={{ flex: 1 }} />

      {/* Contenedor inferior - Detalles y botones */}
      <Box
        sx={{
          flex: '0 0 auto',
          pb: { xs: 8, md: 10 },
          pl: { xs: 3, md: 6 },
          pr: { xs: 3, md: 20 },
          zIndex: 2
        }}
      >
        <Box sx={{ textAlign: 'left' }}>
          {/* Detalles del evento */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontFamily: '"ABeeZee", sans-serif',
                fontWeight: 700,
                color: '#fff',
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                mb: 1,
                textShadow: '2px 2px 0 #000',
                letterSpacing: 1
              }}
            >
              SÁBADO, 15 DE JUNIO
            </Typography>

            <Typography
              sx={{
                fontFamily: '"ABeeZee", sans-serif',
                fontWeight: 700,
                color: '#fff',
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                mb: 1,
                textShadow: '2px 2px 0 #000',
                letterSpacing: 1
              }}
            >
              A LAS 3:00 PM
            </Typography>

            <Typography
              sx={{
                fontFamily: '"ABeeZee", sans-serif',
                fontWeight: 700,
                color: '#fff',
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                mb: 3,
                textShadow: '2px 2px 0 #000',
                letterSpacing: 1
              }}
            >
              EN MI CASA
            </Typography>
          </Box>

          {/* Botones ninja */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 350 }}>
            <Box onClick={handleWhatsAppClick} sx={ninjaButtonStyles}>
              <WhatsAppIcon sx={{ mr: 1 }} />
              Confirmar por WhatsApp
            </Box>
            
            <Box onClick={handleLocationClick} sx={ninjaButtonStyles}>
              <LocationOnIcon sx={{ mr: 1 }} />
              Ver ubicación
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Invitation;