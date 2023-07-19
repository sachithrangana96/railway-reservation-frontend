import {BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom';
import Container from '@mui/material/Container';

import Header from './components/header/index';
import Footer from './components/footer/index';
import Home from './pages/home/index';

function App() {
  return (
     <div>
      <BrowserRouter>
        <Header/>
         <Container maxWidth="lg" sx={{padding:'20px'}}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
         </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
