// src/pages/MissionDetails.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon,
  LocationOn as LocationOnIcon,
  AccessTime as TimeIcon,
  Cake as CakeIcon,
  DirectionsCar as ParkingIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AnimatedBox from '../components/AnimatedBox';

const MissionDetails: React.FC = () => {
  const navigate = useNavigate();

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/bxLdoeRwkaxZyEF57', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5493413820831', '_self');
  };

  return (
    <Box sx={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      overflowY: 'auto' // SCROLL HABILITADO SOLO AQUÍ
    }}>
      {/* Botón para volver */}
      <Box
        sx={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 1000
        }}
      >
        <Box
          onClick={() => navigate('/invitacion')}
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

      {/* Contenido principal */}
      <Box sx={{ flex: 1, pt: 8, px: 3 }}>
        <AnimatedBox animation="fadeInDown" delay={0.2}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"ABeeZee", sans-serif',
              fontWeight: 900,
              color: '#FFE600',
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: '3px 3px 0 #CC2A00, 6px 6px 0 #000',
              lineHeight: 1,
              letterSpacing: 2,
              textAlign: 'center'
            }}
          >
            DETALLES DE LA MISIÓN
          </Typography>
        </AnimatedBox>

        {/* Información práctica */}
        <Box sx={{ maxWidth: '600px', mx: 'auto', mt: 4 }}>
          
          {/* Horario */}
          <AnimatedBox animation="slideInFromLeft" delay={0.4}>
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #FFE600',
                borderRadius: 3,
                p: 3,
                mb: 3,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <TimeIcon sx={{ color: '#FFE600', fontSize: '2rem', mr: 2 }} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"ABeeZee", sans-serif',
                    fontWeight: 700,
                    color: '#FFE600',
                    fontSize: '1.2rem',
                    mb: 0.5
                  }}
                >
                  HORARIO NINJA
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"ABeeZee", sans-serif',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                >
                  Jueves 17 de Julio • 14:00 a 17:00 hs
                </Typography>
              </Box>
            </Box>
          </AnimatedBox>

          {/* Ubicación */}
          <AnimatedBox animation="slideInFromRight" delay={0.6}>
            <Box
              onClick={handleLocationClick}
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #4CAF50',
                borderRadius: 3,
                p: 3,
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <LocationOnIcon sx={{ color: '#4CAF50', fontSize: '2rem', mr: 2 }} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"ABeeZee", sans-serif',
                    fontWeight: 700,
                    color: '#4CAF50',
                    fontSize: '1.2rem',
                    mb: 0.5
                  }}
                >
                  UBICACIÓN DEL DOJO
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"ABeeZee", sans-serif',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                >
                  Los Tilos 1795, Zavalla
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"ABeeZee", sans-serif',
                    color: '#4CAF50',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                  }}
                >
                  Toca para ver en el mapa
                </Typography>
              </Box>
            </Box>
          </AnimatedBox>

          {/* Qué llevar */}
          <AnimatedBox animation="slideInFromLeft" delay={0.8}>
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #CC2A00',
                borderRadius: 3,
                p: 3,
                mb: 3,
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              <CakeIcon sx={{ color: '#CC2A00', fontSize: '2rem', mr: 2, mt: 0.5 }} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"ABeeZee", sans-serif',
                    fontWeight: 700,
                    color: '#CC2A00',
                    fontSize: '1.2rem',
                    mb: 1
                  }}
                >
                  EQUIPO NINJA REQUERIDO
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"ABeeZee", sans-serif',
                    color: '#fff',
                    fontSize: '1rem',
                    mb: 1
                  }}
                >
                  • Ganas de jugar y divertirse<br/>
                  • Actitud ninja positiva<br/>
                  • ¡Muchas ganas de celebrar!
                </Typography>
              </Box>
            </Box>
          </AnimatedBox>

          {/* Estacionamiento */}
          <AnimatedBox animation="slideInFromRight" delay={1.0}>
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #9C27B0',
                borderRadius: 3,
                p: 3,
                mb: 3,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ParkingIcon sx={{ color: '#9C27B0', fontSize: '2rem', mr: 2 }} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"ABeeZee", sans-serif',
                    fontWeight: 700,
                    color: '#9C27B0',
                    fontSize: '1.2rem',
                    mb: 0.5
                  }}
                >
                  ESTACIONAMIENTO
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"ABeeZee", sans-serif',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                >
                  Amplio espacio disponible en casa
                </Typography>
              </Box>
            </Box>
          </AnimatedBox>


          {/* Mensaje final */}
          <AnimatedBox animation="fadeInUp" delay={1.4}>
            <Box
              sx={{
                textAlign: 'center',
                backgroundColor: 'rgba(255, 230, 0, 0.1)',
                border: '2px solid #FFE600',
                borderRadius: 3,
                p: 3,
                mb: 4
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"ABeeZee", sans-serif',
                  fontWeight: 700,
                  color: '#FFE600',
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  textShadow: '2px 2px 0 #000'
                }}
              >
                🥷 ¡La aventura ninja te espera! 🥷
              </Typography>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
    </Box>
  );
};

export default MissionDetails;