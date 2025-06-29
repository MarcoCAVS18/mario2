// src/components/Invitation.tsx

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import logoImage from '../assets/images/logo/logo.svg';
import ninjagoImage from '../assets/images/others/ninjago.png';
import NinjagoButton from './NinjagoButton';

const Invitation: React.FC = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = '5493413820831';
    const message = 'Hola Mario! Confirmado, ahí estaré. ¡Modo ninja activado! 🥷🎉';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/bxLdoeRwkaxZyEF57', '_blank');
  };

  return (
    <Box sx={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column'
    }}>
      {/* Ninjago de fondo */}
      <Box
        sx={{
          position: 'fixed',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
          opacity: 0.1,
          width: '60vw',
          height: 'auto',
          pointerEvents: 'none'
        }}
      >
        <img
          src={ninjagoImage}
          alt="Ninjago background"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </Box>

      {/* Botón volver */}
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
            }
          }}
        >
          <ArrowBackIcon sx={{ mr: 1 }} />
          VOLVER
        </Box>
      </Box>

      {/* CONTENEDOR PRINCIPAL - TODO JUNTO */}
      <Container maxWidth="md" sx={{ 
        position: 'relative', 
        zIndex: 1, 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}>
        
        {/* Logo DENTRO del contenedor */}
        <Box sx={{ mb: 1.5 }}> {/* Menos margen */}
          <img
            src={logoImage}
            alt="Logo Mario 4 años"
            style={{
              width: '180px', // Más pequeño
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(3px 3px 8px rgba(0,0,0,0.6))'
            }}
          />
        </Box>

        {/* Títulos CERCA del logo */}
        <Box sx={{ mb: 2 }}> {/* Menos margen */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"ABeeZee", sans-serif',
              fontWeight: 900,
              color: '#FFE600',
              mb: 0.5,
              fontSize: { xs: '1.6rem', sm: '2rem', md: '2.3rem' }, // Más pequeño
              textShadow: '3px 3px 0 #CC2A00, 6px 6px 0 #000',
              lineHeight: 0.9,
              letterSpacing: 1.5,
              textAlign: 'center'
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
              mb: 0,
              fontSize: { xs: '1.6rem', sm: '2rem', md: '2.3rem' }, // Más pequeño
              textShadow: '3px 3px 0 #FFE600, 6px 6px 0 #000',
              lineHeight: 0.9,
              letterSpacing: 1.5,
              textAlign: 'center'
            }}
          >
            FIESTA NINJA!
          </Typography>
        </Box>

        {/* Info del evento */}
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            border: '2px solid #FFE600',
            borderRadius: 2,
            p: 1.5, // Menos padding
            mb: 2, // Menos margen
            textAlign: 'center',
            maxWidth: '400px'
          }}
        >
          <Typography sx={estiloTexto}>📅 JUEVES, 17 DE JULIO</Typography>
          <Typography sx={estiloTexto}>🕐 DE 14:00 HS A 17:00 HS</Typography>
          <Typography sx={estiloTexto}>🏠 LOS TILOS 1795, ZAVALLA</Typography>
        </Box>

        {/* Botones */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 1, // Menos gap
            width: '100%',
            maxWidth: '380px'
          }}
        >
          <NinjagoButton buttonType="confirma" onClick={handleWhatsAppClick} />
          <NinjagoButton buttonType="ubicacion" onClick={handleLocationClick} />
          <NinjagoButton buttonType="info" onClick={() => navigate('/detalles-mision')} />
        </Box>
      </Container>
    </Box>
  );
};

const estiloTexto = {
  fontFamily: '"ABeeZee", sans-serif',
  fontWeight: 700,
  color: '#FFE600',
  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
  textShadow: '2px 2px 0 #000',
  mb: 0.5
};

export default Invitation;