// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { customTheme } from './styles/theme';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import Invitation from './components/Invitation';
import JuegaComoKai from './components/JuegaComoKai/JuegaComoKai';
import NinjaFacts from './pages/NinjaFacts';
import MissionDetails from './pages/MissionDetails';

function App() {
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