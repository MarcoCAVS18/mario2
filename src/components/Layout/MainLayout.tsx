// src/components/Layout/MainLayout.tsx

import React from 'react';
import { Box } from '@mui/material';
import backgroundImage from '../../assets/images/background/background.png';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Proporción: 441.106 mm x 696.72 mm = ~0.633:1 (ancho:alto)
  const aspectRatio = 441.106 / 696.72; // ≈ 0.633

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000', // Fondo negro por defecto
        overflow: 'hidden',
      }}
    >
      {/* Contenedor con las nuevas proporciones */}
      <Box
        sx={{
          position: 'relative',
          width: {
            xs: '100vw', // En móvil ocupa todo el ancho
            sm: '100vw', // En tablet ocupa todo el ancho
            md: `min(100vw, ${100 / aspectRatio}vh)`, // En desktop mantiene proporción
          },
          height: {
            xs: '100vh', // En móvil ocupa toda la altura
            sm: '100vh', // En tablet ocupa toda la altura  
            md: `min(100vh, ${aspectRatio * 100}vw)`, // En desktop mantiene proporción
          },
          maxWidth: '100vw',
          maxHeight: '100vh',
          backgroundImage: `url(${backgroundImage})`, // Nueva imagen de fondo
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          // Overlay sutil
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.1)', // Overlay más sutil
            zIndex: 0,
            pointerEvents: 'none'
          }
        }}
      >
        {/* Contenedor de contenido */}
        <Box 
          sx={{ 
            position: 'relative', 
            zIndex: 1, 
            width: '100%', 
            height: '100%',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            userSelect: 'none',
            p: { xs: 2, sm: 3, md: 4 }, // Padding responsivo
          }}
        >
          {children}
        </Box>
      </Box>

      {/* Barras negras en desktop cuando sea necesario */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000',
          zIndex: -1,
          display: { xs: 'none', md: 'block' }
        }}
      />
    </Box>
  );
};

export default MainLayout;