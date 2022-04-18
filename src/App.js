import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.component';
import Offers from './pages/Offers.page';
import Explore from './pages/Explore.page';
import Profile from './pages/Profile.page';
import ForgotPassword from './pages/Forgot-password.page';
import SignUp from './pages/SignUp.page';
import SignIn from './pages/SignIn.page';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar/>
      </Router>
    </>
  );
}

export default App;
