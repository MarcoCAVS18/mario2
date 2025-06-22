// src/pages/MissionDetails.tsx
import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon,
  Map as MapIcon,
  QrCode as QrCodeIcon 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AnimatedBox from '../components/AnimatedBox';

const MissionDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: '600px', width: '100%', px: 2 }}>
      <AnimatedBox animation="slideInFromLeft" delay={0.1}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/invitacion')}
          sx={{
            color: '#FFD700',
            mb: 3,
            fontSize: '1.1rem',
            fontFamily: '"ABeeZee", sans-serif'
          }}
        >
          Volver a la Invitación
        </Button>
      </AnimatedBox>

      <Paper
        elevation={6}
        sx={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 4,
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          p: 4,
          textAlign: 'center',
        }}
      >
        <AnimatedBox animation="bounce" delay={0.2}>
          <MapIcon 
            sx={{ 
              fontSize: '3rem', 
              color: '#D32F2F', 
              mb: 2 
            }} 
          />
        </AnimatedBox>

        <AnimatedBox animation="fadeInDown" delay={0.4}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{ 
              color: '#D32F2F', 
              fontWeight: 'bold',
              fontFamily: '"ABeeZee", sans-serif',
              mb: 3
            }}
          >
            Detalles de la Misión Ninja
          </Typography>
        </AnimatedBox>
        
        <AnimatedBox animation="fadeInUp" delay={0.6}>
          <Typography 
            variant="body1" 
            paragraph
            sx={{
              color: '#555',
              fontFamily: '"ABeeZee", sans-serif',
              fontSize: '1.1rem',
              mb: 3
            }}
          >
            La batalla contra el mal se librará en el dojo secreto...
          </Typography>
        </AnimatedBox>

        <AnimatedBox animation="slideInFromLeft" delay={0.8}>
          <Box
            sx={{
              p: 3,
              bgcolor: '#F5F5F5',
              borderRadius: 3,
              border: '2px solid #4CAF50',
              mb: 4
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#4CAF50',
                fontFamily: '"ABeeZee", sans-serif',
                mb: 1
              }}
            >
              Ubicación Secreta del Dojo:
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                color: '#333',
                fontFamily: '"ABeeZee", sans-serif'
              }}
            >
              Calle de los Ninjas 123, Barrio Spinjitzu
            </Typography>
          </Box>
        </AnimatedBox>
        
        <AnimatedBox animation="pulse" delay={1.0}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 3
            }}
          >
            <QrCodeIcon sx={{ fontSize: '2rem', color: '#666', mb: 1 }} />
            <Box
              sx={{
                width: 200,
                height: 200,
                bgcolor: '#F0F0F0',
                border: '2px dashed #999',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2
              }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#666',
                  fontFamily: '"ABeeZee", sans-serif',
                  textAlign: 'center'
                }}
              >
                Código QR<br/>de ubicación
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              sx={{
                color: '#666',
                fontFamily: '"ABeeZee", sans-serif',
                fontStyle: 'italic'
              }}
            >
              ¡Escanea para la ubicación exacta!
            </Typography>
          </Box>
        </AnimatedBox>
        
        <AnimatedBox animation="fadeInUp" delay={1.2}>
          <Typography 
            variant="body1" 
            paragraph
            sx={{
              color: '#555',
              fontFamily: '"ABeeZee", sans-serif',
              mb: 4,
              fontWeight: 'bold'
            }}
          >
            Prepara tus habilidades ninja. Mario y Ninjago cuentan contigo!
          </Typography>
        </AnimatedBox>

        <AnimatedBox animation="fadeInUp" delay={1.4}>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontFamily: '"ABeeZee", sans-serif',
              background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #388E3C 30%, #4CAF50 90%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 16px rgba(76, 175, 80, 0.3)'
              },
              transition: 'all 0.3s ease'
            }}
            onClick={() => navigate('/invitacion')}
          >
            Volver a la Invitación
          </Button>
        </AnimatedBox>
      </Paper>
    </Box>
  );
};

export default MissionDetails;