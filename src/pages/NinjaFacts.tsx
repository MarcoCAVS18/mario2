// src/pages/NinjaFacts.tsx

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AnimatedBox from '../components/AnimatedBox';
import NinjagoButton from '../components/NinjagoButton';

const facts = [
  "Kai es el Ninja del Fuego y el Maestro Elemental del Fuego.",
  "Su lealtad a sus amigos es inquebrantable.",
  "Siempre está listo para una buena pelea.",
  "Su dragón elemental se llama Flame.",
  "El Spinjitzu es una técnica de lucha ninja que crea tornados de energía.",
  "Los cuatro Ninjas originales eran Kai, Jay, Cole y Zane.",
  "Kai usa katanas gemelas como sus armas principales.",
  "Su hermana Nya también es una ninja, la Maestra del Agua.",
  "Los ninjas protegen las Armas Doradas de Spinjitzu.",
  "Ninjago es una isla flotante llena de aventuras épicas."
];

const NinjaFacts: React.FC = () => {
  const navigate = useNavigate();
  const [currentFactIndex, setCurrentFactIndex] = React.useState(0);

  const showNextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
  };

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 4 }}>
      {/* Botón para volver - Fijo en esquina superior izquierda */}
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

      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          justifyContent: 'center'
        }}
      >
        {/* Título principal */}
        <AnimatedBox animation="fadeInDown" delay={0.3}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"ABeeZee", sans-serif',
              fontWeight: 900,
              color: '#FFE600',
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              textShadow: '4px 4px 0 #CC2A00, 8px 8px 0 #000',
              lineHeight: 0.9,
              letterSpacing: 3
            }}
          >
            CURIOSIDADES NINJA
          </Typography>
        </AnimatedBox>

        {/* Subtítulo */}
        <AnimatedBox animation="fadeInUp" delay={0.5}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"ABeeZee", sans-serif',
              fontWeight: 700,
              color: '#fff',
              mb: 6,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              textShadow: '2px 2px 0 #000',
              letterSpacing: 1
            }}
          >
            🥷 Descubre los secretos del mundo ninja 🥷
          </Typography>
        </AnimatedBox>

        {/* Tarjeta de curiosidad */}
        <AnimatedBox 
          key={currentFactIndex} 
          animation="fadeInUp" 
          delay={0.1} 
          duration={0.5}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '3px solid #FFE600',
              borderRadius: 4,
              p: 4,
              mb: 4,
              maxWidth: '600px',
              width: '100%',
              position: 'relative',
              boxShadow: '0 0 20px rgba(255, 230, 0, 0.3)',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            {/* Número de curiosidad */}
            <Box
              sx={{
                position: 'absolute',
                top: -15,
                right: -15,
                backgroundColor: '#CC2A00',
                color: '#FFE600',
                borderRadius: '50%',
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                fontFamily: '"ABeeZee", sans-serif',
                border: '2px solid #FFE600',
                boxShadow: '0 0 10px rgba(204, 42, 0, 0.5)'
              }}
            >
              {currentFactIndex + 1}
            </Box>

            {/* Texto de la curiosidad */}
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"ABeeZee", sans-serif',
                fontWeight: 600,
                color: '#FFE600',
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                lineHeight: 1.6,
                textAlign: 'center',
                fontStyle: 'italic',
                textShadow: '2px 2px 0 #000'
              }}
            >
              "{facts[currentFactIndex]}"
            </Typography>
          </Box>
        </AnimatedBox>

        {/* Indicador de progreso */}
        <AnimatedBox animation="fadeInUp" delay={0.3}>
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              mb: 4,
              fontFamily: '"ABeeZee", sans-serif',
              fontSize: '1.1rem',
              textShadow: '1px 1px 0 #000'
            }}
          >
            {currentFactIndex + 1} de {facts.length} curiosidades
          </Typography>
        </AnimatedBox>

        {/* Botones usando NinjagoButton */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center'
          }}
        >
          {/* Botón Siguiente */}
          <AnimatedBox animation="pulse" delay={0.5}>
            <NinjagoButton
              buttonType="siguiente"
              onClick={showNextFact}
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 2.5,
                minHeight: '55px'
              }}
            />
          </AnimatedBox>

          {/* Botón Volver al Inicio */}
          <AnimatedBox animation="fadeInUp" delay={0.7}>
            <NinjagoButton
              buttonType="volver"
              onClick={() => navigate('/')}
              sx={{
                fontSize: '1rem',
                px: 3.5,
                minHeight: '50px'
              }}
            />
          </AnimatedBox>
        </Box>

        {/* Easter egg - Emoji ninja flotante */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            fontSize: '2rem',
            animation: 'float 3s ease-in-out infinite',
            '@keyframes float': {
              '0%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
              '100%': { transform: 'translateY(0px)' }
            }
          }}
        >
          🥷
        </Box>
      </Box>
    </Container>
  );
};

export default NinjaFacts;