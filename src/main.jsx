import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import TournamentPage from './TournamentPage.jsx';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MatchesPage from './MatchesPage.jsx';

function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <AppBar position="sticky" sx={{ bgcolor: "#333" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: 1,
              fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font size
            }}
          >
            Soccer Tournament
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust button font size
                '&:hover': {
                  bgcolor: '#444',  
                  transform: 'scale(1.05)', 
                  transition: 'transform 0.3s ease, bgcolor 0.3s ease'
                },
              }}
            >
              Tabla
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/matches"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust button font size
                '&:hover': {
                  bgcolor: '#444',  
                  transform: 'scale(1.05)', 
                  transition: 'transform 0.3s ease, bgcolor 0.3s ease' 
                },
              }}
            >
              Partidos
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <div className="flex-1 md:p-6 lg:p-6 xl:p-6 bg-gray-50">{children}</div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <TournamentPage />
            </MainLayout>
          }
        />
        <Route
          path="/matches"
          element={
            <MainLayout>
              <MatchesPage /> 
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  </StrictMode>,
);
