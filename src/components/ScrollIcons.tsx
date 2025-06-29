// src/components/ScrollIcons.tsx

import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

// Icono de pergamino enrollado para invitación
export const ScrollParchmentIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path 
      fill="currentColor" 
      d="M4,2A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4A2,2 0 0,0 20,2H4M4,4H8V6H4V4M10,4H20V6H10V4M4,8H14V10H4V8M16,8H20V10H16V8M4,12H20V14H4V12M4,16H16V18H4V16M18,16H20V18H18V16M4,20H12V22H4V20M14,20H20V22H14V20Z"
    />
  </SvgIcon>
);

// Icono de shuriken ninja de 4 puntas para juego
export const FourPointShurikenIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <g fill="currentColor">
      {/* Centro del shuriken */}
      <circle cx="12" cy="12" r="2.5" />
      
      {/* Punta superior */}
      <path d="M12,2 L10,8 L14,8 Z" />
      
      {/* Punta derecha */}
      <path d="M22,12 L16,10 L16,14 Z" />
      
      {/* Punta inferior */}
      <path d="M12,22 L14,16 L10,16 Z" />
      
      {/* Punta izquierda */}
      <path d="M2,12 L8,14 L8,10 Z" />
      
      {/* Conexiones de las puntas */}
      <path d="M12,9.5 L9.5,12 L12,14.5 L14.5,12 Z" />
    </g>
  </SvgIcon>
);

// Icono de flor de loto de 5 pétalos para curiosidades
export const LotusFlowerIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <g fill="currentColor">
      {/* Centro de la flor */}
      <circle cx="12" cy="12" r="2" />
      
      {/* Pétalo superior */}
      <ellipse cx="12" cy="7" rx="2.5" ry="4" />
      
      {/* Pétalo superior derecho */}
      <ellipse cx="16.5" cy="9" rx="2.5" ry="4" transform="rotate(72 16.5 9)" />
      
      {/* Pétalo inferior derecho */}
      <ellipse cx="15" cy="16" rx="2.5" ry="4" transform="rotate(144 15 16)" />
      
      {/* Pétalo inferior izquierdo */}
      <ellipse cx="9" cy="16" rx="2.5" ry="4" transform="rotate(216 9 16)" />
      
      {/* Pétalo superior izquierdo */}
      <ellipse cx="7.5" cy="9" rx="2.5" ry="4" transform="rotate(288 7.5 9)" />
      
      {/* Detalles internos */}
      <circle cx="12" cy="12" r="1" opacity="0.7" />
    </g>
  </SvgIcon>
);

// Versión alternativa del pergamino más detallada
export const DetailedScrollIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <g fill="currentColor">
      {/* Rollo izquierdo */}
      <path d="M3,4 A2,2 0 0,0 1,6 V18 A2,2 0 0,0 3,20 A2,2 0 0,0 5,18 V6 A2,2 0 0,0 3,4 Z" />
      
      {/* Rollo derecho */}
      <path d="M21,4 A2,2 0 0,1 23,6 V18 A2,2 0 0,1 21,20 A2,2 0 0,1 19,18 V6 A2,2 0 0,1 21,4 Z" />
      
      {/* Pergamino central */}
      <rect x="5" y="5" width="14" height="14" rx="1" />
      
      {/* Líneas del texto */}
      <rect x="7" y="8" width="10" height="1" opacity="0.6" />
      <rect x="7" y="10" width="8" height="1" opacity="0.6" />
      <rect x="7" y="12" width="10" height="1" opacity="0.6" />
      <rect x="7" y="14" width="6" height="1" opacity="0.6" />
      
      {/* Sello */}
      <circle cx="16" cy="16" r="2" opacity="0.8" />
    </g>
  </SvgIcon>
);