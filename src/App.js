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
import { API_BASE_URL } from './utils/httpClient';
import { fetchMe } from './pages/profile/slices/profileSlice';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const [isUser, setIsUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await dispatch(fetchMe());
        return !!response.data;
      } catch (error) {
        return false;
      }
    };

    checkUser();
   
  }, []);

  return (
     <div>
      <BrowserRouter>
        <Header/>
         <Container maxWidth="lg" sx={{padding:'20px'}}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/reserve/:id" element={<ProtectedRoute user={isUser}><Booking /></ProtectedRoute>} /> */}
              <Route path="/reserve/:id" element={<Booking />} />
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
