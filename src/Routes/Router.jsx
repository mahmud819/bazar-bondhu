import { Routes, Route } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import PlaceOrder from "../Components/PlaceOrder/PlaceOrder.jsx";
import TrackOrder from "../Pages/TrackOrder/TrackOrder.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import About from "../Pages/About Us/AboutUs.jsx";
import SignIn from "../Pages/SignIn/SignIn.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/order" element={<PlaceOrder></PlaceOrder>} />
        <Route path="/trackOrder" element={<TrackOrder></TrackOrder>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/aboutUs" element={<About></About>} />
      </Route>
      {/* auth routers */}
      <Route>
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
      </Route>
    </Routes>
  );
}

export default Router;
