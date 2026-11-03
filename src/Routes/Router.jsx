
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.jsx';
import HomePage from '../HomePage/HomePage.jsx';
import PlaceOrder from '../Components/PlaceOrder/PlaceOrder.jsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/order' element = {<PlaceOrder></PlaceOrder>} />
      </Route>
    </Routes>
  );
}

export default Router;
