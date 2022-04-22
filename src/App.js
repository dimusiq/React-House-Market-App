import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './components/Navbar.component';
import PrivateRoute from './components/PrivateRoutes.component.jsx' 
import Offers from './pages/Offers.page';
import Category from './pages/Category.page';
import Explore from './pages/Explore.page';
import Profile from './pages/Profile.page';
import ForgotPassword from './pages/Forgot-password.page';
import SignUp from './pages/SignUp.page';
import SignIn from './pages/SignIn.page';
import CreateListing from './pages/Create-listing.page';
import Listing from './pages/Listing.page';
import Contact from './pages/Contact.page';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
            </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/category/:categoryName/:listingId' element={<Listing />} />
          <Route path='/contact/:landlordId' element={<Contact />} />
        </Routes>
        <Navbar/>
      </Router>
      <ToastContainer>
      </ToastContainer>
    </>
  );
}

export default App;
