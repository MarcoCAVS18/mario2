// src/components/NinjagoButton.tsx

import React from 'react';
import { Box, SxProps } from '@mui/material';
import invitacionSvg from '../assets/images/buttons/invitacion.svg';
import juegoNinjaSvg from '../assets/images/buttons/juegoninja.svg';
import curiosidadesSvg from '../assets/images/buttons/curiosidades.svg';
import comenzarSvg from '../assets/images/buttons/comenzar.svg';

interface NinjagoButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  sx?: SxProps;
  disabled?: boolean;
  buttonType: 'invitacion' | 'juegoninja' | 'curiosidades' | 'comenzar';
}

const NinjagoButton: React.FC<NinjagoButtonProps> = ({
  children,
  onClick,
  sx = {},
  disabled = false,
  buttonType
}) => {
  // Seleccionar el SVG según el tipo de botón
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
      default:
        return invitacionSvg;
    }
  };

  return (
    <Box
      onClick={disabled ? undefined : onClick}
      sx={{
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        transition: 'all 0.3s ease-in-out',
        opacity: disabled ? 0.6 : 1,
        // HACER EL CONTENEDOR EXACTAMENTE IGUAL AL SVG
        display: 'inline-block',
        width: 'fit-content',
        height: 'fit-content',
        margin: 0,
        padding: 0,
        lineHeight: 0, // Elimina espacio extra de texto
        '&:hover': disabled ? {} : {
          transform: 'translateY(-2px) scale(1.03)',
          filter: 'brightness(1.1) drop-shadow(0 4px 12px rgba(255,230,0,0.4))',
        },
        '&:active': disabled ? {} : {
          transform: 'translateY(0) scale(0.98)',
          filter: 'brightness(0.9)',
        },
        ...sx
      }}
    >
      {/* SVG con tamaño controlado pero sin forzar contenedor */}
      <Box
        component="img"
        src={getSvgSource()}
        alt={`${buttonType} Button`}
        sx={{
          display: 'block',
          width: { xs: '300px', sm: '350px', md: '400px' }, // Tamaño responsivo del SVG
          height: 'auto', // Altura automática para mantener proporción
          margin: 0,
          padding: 0,
          verticalAlign: 'top',
          filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.4))',
        }}
      />

      {/* Contenido del botón encima del SVG */}
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
          gap: 1
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default NinjagoButton;