// src/components/NinjagoButton.tsx

import React from 'react';
import { Box, SxProps } from '@mui/material';

import invitacionSvg from '../assets/images/buttons/invitacion.svg';
import juegoNinjaSvg from '../assets/images/buttons/juegoninja.svg';
import curiosidadesSvg from '../assets/images/buttons/curiosidades.svg';
import comenzarSvg from '../assets/images/buttons/comenzar.svg';
import confirmaSvg from '../assets/images/buttons/confirma.svg';
import infoSvg from '../assets/images/buttons/info.svg';
import ubicacionSvg from '../assets/images/buttons/ubicacion.svg';
import siguienteSvg from '../assets/images/buttons/siguiente.svg';
import volverSvg from '../assets/images/buttons/volver-inicio.svg';

import slashSound from '../assets/sounds/slash.mp3';

interface NinjagoButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  sx?: SxProps;
  disabled?: boolean;
  buttonType:
    | 'invitacion'
    | 'juegoninja'
    | 'curiosidades'
    | 'comenzar'
    | 'siguiente'
    | 'volver'
    | 'confirma'
    | 'info'
    | 'ubicacion';
}

const NinjagoButton: React.FC<NinjagoButtonProps> = ({
  children,
  onClick,
  sx = {},
  disabled = false,
  buttonType,
}) => {
  const playNinjaSound = () => {
    try {
      const audio = new Audio(slashSound);
      audio.volume = 0.3;
      audio.play().catch((error) => {
        console.log('No se pudo reproducir el sonido ninja:', error);
      });
    } catch (error) {
      console.log('Error al crear el audio ninja:', error);
    }
  };

  const handleClick = () => {
    playNinjaSound();
    if (onClick) {
      onClick();
    }
  };

  const getDefaultText = () => {
    switch (buttonType) {
      case 'invitacion':
        return 'VER INVITACIÓN';
      case 'juegoninja':
        return 'JUEGA COMO KAI';
      case 'curiosidades':
        return 'CURIOSIDADES NINJA';
      case 'comenzar':
        return 'COMENZAR MISIÓN';
      case 'siguiente':
        return 'SIGUIENTE';
      case 'volver':
        return 'VOLVER AL INICIO';
      case 'confirma':
        return 'CONFIRMA!';
      case 'info':
        return 'MÁS DETALLES';
      case 'ubicacion':
        return 'VER UBICACIÓN';
      default:
        return 'BOTÓN NINJA';
    }
  };

  const getSvgSource = () => {
    switch (buttonType) {
      case 'invitacion':
        return invitacionSvg;
      case 'juegoninja':
        return juegoNinjaSvg;
      case 'curiosidades':
        return curiosidadesSvg;
      case 'comenzar':
        return comenzarSvg;
      case 'siguiente':
        return siguienteSvg;
      case 'volver':
        return volverSvg;
      case 'confirma':
        return confirmaSvg;
      case 'info':
        return infoSvg;
      case 'ubicacion':
        return ubicacionSvg;
      default:
        return invitacionSvg;
    }
  };

  return (
    <Box
      onClick={disabled ? undefined : handleClick}
      sx={{
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        transition: 'all 0.3s ease-in-out',
        opacity: disabled ? 0.6 : 1,
        display: 'inline-block',
        width: 'fit-content',
        height: 'fit-content',
        margin: 0,
        padding: 0,
        lineHeight: 0,
        '&:hover': disabled ? {} : {
          transform: 'translateY(-2px) scale(1.03)',
        },
        '&:active': disabled ? {} : {
          transform: 'translateY(0) scale(0.98)',
        },
        ...sx,
      }}
    >
      <Box
        component="img"
        src={getSvgSource()}
        alt={`${buttonType} Button`}
        sx={{
          display: 'block',
          width: { xs: '300px', sm: '350px', md: '400px' },
          height: 'auto',
          verticalAlign: 'top',
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          width: '80%',
          textAlign: 'center',
          fontFamily: '"ABeeZee", sans-serif',
          fontWeight: 700,
          fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
          color: '#FFE600',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          letterSpacing: 1,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {children || getDefaultText()}
      </Box>
    </Box>
  );
};

export default NinjagoButton;
