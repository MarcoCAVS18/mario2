// src/components/WhatsAppButton.tsx

import React from 'react';
import { Fab, Box, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '5493413820831',
  message = 'Hola amigo, claro que voy. ¡Modo Ninja activado!',
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 32 },
        right: { xs: 16, md: 32 },
        zIndex: 1000,
      }}
    >
      <Tooltip title="Confirma!" arrow>
        <Fab
          color="success"
          aria-label="whatsapp"
          onClick={handleClick}
          sx={{
            backgroundColor: '#25D366',
            '&:hover': {
              backgroundColor: '#1DA851',
            },
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 30, md: 36 } }} />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default WhatsAppButton;