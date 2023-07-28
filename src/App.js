import {BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom';
import Container from '@mui/material/Container';
import axios from 'axios';
import './index.css'
import Header from './components/header/index';
import Footer from './components/footer/index';
import Home from './pages/home/index';
import Booking   from './pages/booking/index';
import Login   from './pages/auth//login/index';
import Register   from './pages/auth//register/index';
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';
import httpClient,{ API_BASE_URL } from './utils/httpClient';

function App() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await httpClient.get(`/users/me`);
        return !!response.data;
      } catch (error) {
        return false;
      }
    };

    const fetchUserStatus = async () => {
      const authenticated = await checkUser();
      setIsUser(authenticated);
    };

    fetchUserStatus();
  }, [isUser]);

  return (
     <div>
      <BrowserRouter>
        <Header/>
         <Container maxWidth="lg" sx={{padding:'20px'}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reserve/:id" element={<ProtectedRoute user={isUser}><Booking /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
         </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
