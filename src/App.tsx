// src/App.tsx

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { customTheme } from './styles/theme';
import MainLayout from './components/Layout/MainLayout';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Invitation from './components/Invitation';
import JuegaComoKai from './components/JuegaComoKai/JuegaComoKai';
import NinjaFacts from './pages/NinjaFacts';
import MissionDetails from './pages/MissionDetails';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/invitacion' element={<Invitation />} />
            <Route path='/juega' element={<JuegaComoKai />} />
            <Route path='/curiosidades-ninja' element={<NinjaFacts />} />
            <Route path='/detalles-mision' element={<MissionDetails />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;