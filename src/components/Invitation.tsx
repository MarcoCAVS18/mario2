// src/components/Invitation.tsx

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import logoImage from '../assets/images/logo/logo.svg';
import ninjagoImage from '../assets/images/others/ninjago.png';
import AnimatedBox from './AnimatedBox';
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
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Fondo ninjago más chico y más visible */}
      <Box
        sx={{
          position: 'fixed',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
          opacity: 0.15,
          width: { xs: '90vw', md: '80vw' },
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
        <AnimatedBox animation="slideInFromLeft" delay={0.1}>
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
        </AnimatedBox>
      </Box>

      {/* Logo arriba de todo */}
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1001,
          width: { xs: '180px', sm: '220px' },
          height: 'auto',
        }}
      >
        <AnimatedBox animation="fadeInDown" delay={0.2}>
          <img
            src={logoImage}
            alt="Logo Mario 4 años"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(3px 3px 10px rgba(0,0,0,0.5))'
            }}
          />
        </AnimatedBox>
      </Box>

      {/* Contenido central */}
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
        <Box sx={{ mt: { xs: 25, md: 30 } }}>
          <AnimatedBox animation="slideInFromLeft" delay={0.4}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"ABeeZee", sans-serif',
                fontWeight: 900,
                color: '#FFE600',
                mb: 1,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                textShadow: '3px 3px 0 #CC2A00, 6px 6px 0 #000',
                lineHeight: 1,
                letterSpacing: 2,
                textAlign: 'center'
              }}
            >
              ¡ESTÁS INVITADO A MI
            </Typography>
          </AnimatedBox>

          <AnimatedBox animation="slideInFromRight" delay={0.6}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"ABeeZee", sans-serif',
                fontWeight: 900,
                color: '#CC2A00',
                mb: 4,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                textShadow: '3px 3px 0 #FFE600, 6px 6px 0 #000',
                lineHeight: 1,
                letterSpacing: 2,
                textAlign: 'center'
              }}
            >
              FIESTA NINJA!
            </Typography>
          </AnimatedBox>
        </Box>

        {/* Info del evento */}
        <AnimatedBox animation="fadeInUp" delay={0.8}>
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid #FFE600',
              borderRadius: 3,
              p: 3,
              mb: 4,
              textAlign: 'center',
              boxShadow: '0 0 20px rgba(255, 230, 0, 0.3)'
            }}
          >
            <Typography sx={{ ...estiloTexto }}>📅 JUEVES, 17 DE JULIO</Typography>
            <Typography sx={{ ...estiloTexto }}>🕐 DE 14:00 HS A 17:00 HS</Typography>
            <Typography sx={{ ...estiloTexto }}>🏠 LOS TILOS 1795, ZAVALLA</Typography>
          </Box>
        </AnimatedBox>

        {/* Botones */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 2,
            width: '100%',
            maxWidth: '400px'
          }}
        >
          <AnimatedBox animation="slideInFromLeft" delay={1.0}>
            <NinjagoButton buttonType="confirma" onClick={handleWhatsAppClick} />
          </AnimatedBox>
          <AnimatedBox animation="slideInFromLeft" delay={1.2}>
            <NinjagoButton buttonType="ubicacion" onClick={handleLocationClick} />
          </AnimatedBox>
          <AnimatedBox animation="slideInFromLeft" delay={1.4}>
            <NinjagoButton buttonType="info" onClick={() => navigate('/detalles-mision')} />
          </AnimatedBox>
        </Box>
      </Container>
    </Box>
  );
};

const estiloTexto = {
  fontFamily: '"ABeeZee", sans-serif',
  fontWeight: 700,
  color: '#FFE600',
  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
  mb: 1,
  textShadow: '2px 2px 0 #000'
};

export default Invitation;
