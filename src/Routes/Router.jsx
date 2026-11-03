
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.jsx';
import HomePage from '../HomePage/HomePage.jsx';
import PlaceOrder from '../Components/PlaceOrder/PlaceOrder.jsx';
import TrackOrder from '../Pages/TrackOrder/TrackOrder.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import About from '../Pages/About Us/AboutUs.jsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/order' element = {<PlaceOrder></PlaceOrder>} />
        <Route path='/trackOrder' element={<TrackOrder></TrackOrder>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/aboutUs' element={<About></About>} />
      </Route>
    </Routes>
  );
}

export default Router;
