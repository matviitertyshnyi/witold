import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BarberListPage from './pages/BarberListPage'; 
import BarberProfilePage from './pages/BarberProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './pages/AuthProvider';


import './styles/global.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/home-page.css';
import './styles/barber-profile-page.css';
import './styles/barber-list-page.css';
import './styles/login-page.css';
import './styles/register-page.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/barbers" element={<BarberListPage />} />
              <Route path="/barber/:id" element={<BarberProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
