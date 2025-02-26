import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import TournamentPage from './TournamentPage.jsx';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function MainLayout({ children }) {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Soccer Tournament
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Tabla
          </Button>
          <Button color="inherit" component={Link} to="/matches">
            Partidos
          </Button>
        </Toolbar>
      </AppBar>
      <div className="p-6">{children}</div>
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
              {/* <MatchesPage /> */}
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  </StrictMode>,
);
