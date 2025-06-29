// src/components/NinjaIcons.tsx

import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

// Icono de pergamino ninja para invitación
export const ScrollIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M20,2H10A2,2 0 0,0 8,4V6.17C7.5,6.06 6.9,6 6.21,6C3.44,6 1.95,7.37 1.95,9.75C1.95,12.13 3.44,13.5 6.21,13.5C6.9,13.5 7.5,13.44 8,13.33V16A2,2 0 0,0 10,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H10V15.5L18,13.5L20,14.5V16M20,12.5L8,15.5V7.83C8.91,8.28 10.21,8.5 11.5,8.5C12.79,8.5 14.09,8.28 15,7.83C15.91,8.28 17.21,8.5 18.5,8.5C19.29,8.5 19.9,8.44 20,8.33V12.5Z" />
  </SvgIcon>
);

// Icono de shuriken ninja para juego
export const ShurikenIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12,2L15.5,8.5L22,12L15.5,15.5L12,22L8.5,15.5L2,12L8.5,8.5L12,2M12,4.8L9.8,9.2L5.4,11.4L9.8,13.6L12,18L14.2,13.6L18.6,11.4L14.2,9.2L12,4.8M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5Z" />
  </SvgIcon>
);

// Icono de flor de loto ninja para curiosidades
export const LotusIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,13L21,19V17H23V9H21M3,9V17H5V19L11,13L5,7V9H3M14.97,11.83C14.87,12.79 14.59,13.71 14.14,14.54C15.04,14.85 15.97,15 16.9,15C18.28,15 19.59,14.64 20.69,14C19.59,13.36 18.28,13 16.9,13C16.31,13 15.72,13.1 15.16,13.26C15.06,12.79 14.87,12.33 14.59,11.9C15.15,11.75 15.72,11.65 16.31,11.65C17.69,11.65 19,12 20.1,12.65C19,12 17.69,11.65 16.31,11.65C15.72,11.65 15.15,11.75 14.59,11.9C14.97,11.85 14.97,11.85 14.97,11.83M9.03,11.83C9.13,12.79 9.41,13.71 9.86,14.54C8.96,14.85 8.03,15 7.1,15C5.72,15 4.41,14.64 3.31,14C4.41,13.36 5.72,13 7.1,13C7.69,13 8.28,13.1 8.84,13.26C8.94,12.79 9.13,12.33 9.41,11.9C8.85,11.75 8.28,11.65 7.69,11.65C6.31,11.65 5,12 3.9,12.65C5,12 6.31,11.65 7.69,11.65C8.28,11.65 8.85,11.75 9.41,11.9C9.03,11.85 9.03,11.85 9.03,11.83Z" />
  </SvgIcon>
);

// Componente para el icono de pergamino más detallado
export const DetailedScrollIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path 
      fill="currentColor" 
      d="M4,4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4H4M4,6H20V18H4V6M6,8V10H18V8H6M6,12V14H16V12H6Z" 
    />
  </SvgIcon>
);