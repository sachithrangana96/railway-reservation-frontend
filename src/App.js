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
import BookingHistory from './pages/BookingHistory'
import Profile from './pages/user_profile'
import httpClient,{ API_BASE_URL } from './utils/httpClient';
import UpdateProfile from './pages/update_profile'
import ForgetPassword from './pages/auth/forger-password/index'
import VerifyEmail from './pages/auth/emailVerify/index'

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
              <Route path="/reserve/:id/:date/:price" element={<Booking />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forget-password" element={<VerifyEmail />} />
              <Route path="/history" element={<BookingHistory/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/update" element={<UpdateProfile/>}/>
            </Routes>
         </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
