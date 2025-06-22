// src/styles/theme.ts

import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#D32F2F', 
      light: '#FF5252',
      dark: '#B71C1C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF9800', 
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#000000',
    },
    background: {
      default: '#1A1A1A', 
      paper: '#2D2D2D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFD700', 
    },
    error: {
      main: '#EF5350',
    },
    warning: {
      main: '#FFC107',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: '"ABeeZee", "Roboto", sans-serif', 
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      fontFamily: '"ABeeZee", sans-serif',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      fontFamily: '"ABeeZee", sans-serif',
      '@media (min-width:600px)': {
        fontSize: '2.8rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
      fontFamily: '"ABeeZee", sans-serif',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 400,
      fontFamily: '"ABeeZee", sans-serif',
      '@media (min-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 400,
      fontFamily: '"ABeeZee", sans-serif',
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 400,
      fontFamily: '"ABeeZee", sans-serif',
    },
    body1: {
      fontSize: '1rem',
      fontFamily: '"ABeeZee", sans-serif',
    },
    body2: {
      fontSize: '0.9rem',
      fontFamily: '"ABeeZee", sans-serif',
    },
    button: {
      fontFamily: '"ABeeZee", sans-serif',
      fontWeight: 400,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontFamily: '"ABeeZee", sans-serif',
          fontWeight: 500,
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          }
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"ABeeZee", sans-serif',
        },
      },
    },
  },
});