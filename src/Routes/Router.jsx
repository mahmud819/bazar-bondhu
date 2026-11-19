import { Routes, Route, Navigate } from "react-router-dom";
// import MainLayout from "../MainLayout/MainLayout.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import PlaceOrder from "../Components/PlaceOrder/PlaceOrder.jsx";
import TrackOrder from "../Pages/TrackOrder/TrackOrder.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import About from "../Pages/About Us/AboutUs.jsx";
import SignIn from "../Pages/SignIn/SignIn.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import MainLayout from "../Layout/MainLayout/MainLayout.jsx";
import DashBoard from "../Layout/DashBoardLayout/DashBoard/DashBoard.jsx";
import useAuth from "../Hooks/CustomHooks/UseAuth/useAuth.jsx";
import RoleProtectedRoute from "./RoleProtectedRoute/RoleProtectedRoute.jsx";
import CustomerDashBoard from "../DashBoard/CustomerDashBoard/CustomerDashBoard.jsx";
import AdminDashBoard from "../DashBoard/AdminDashBoard/AdminDashBoard.jsx";
import DeliveryManDashBoard from "../DashBoard/DeliveryManDashBoard/DeliveryManDashBoard.jsx";
import useUser from "../Hooks/CustomHooks/UseUser/useUser.jsx";
// import DashBoardLayout from '../Layout/DashBoardLayout/DashBoardLayout.jsx'

function DashboardRedirect() {
  const { user, loading } = useAuth();
  const{userInfo}=useUser();
  console.log(userInfo,userInfo.email)

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  const dashboardPaths = {
    customer: "/dashboard/customer",
    admin: "/dashboard/admin",
    deliveryman: "/dashboard/deliveryman",
  };

  return <Navigate to={dashboardPaths[user?.role] || "/"} replace />;
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/order" element={<PlaceOrder></PlaceOrder>} />
        <Route path="/trackOrder" element={<TrackOrder></TrackOrder>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/aboutUs" element={<About></About>} />
        <Route path="/dashBoard" element={<DashBoard></DashBoard>} />
      </Route>
      {/* auth routers */}
      <Route>
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
      </Route>
      {/* dashBoard Routes */}

      {/* Redirect to correct Dashboard */}
      <Route path="/dashboard" element={<DashboardRedirect />} />

      {/* Customer Dashboard */}
      <Route element={<RoleProtectedRoute allowedRoles={["customer"]} />}>
        <Route path="/dashboard/customer" element={<CustomerDashBoard />} />
      </Route>

      {/* Admin Dashboard */}
      <Route element={<RoleProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/dashboard/admin" element={<AdminDashBoard />} />
      </Route>

      {/* Deliveryman Dashboard */}
      <Route element={<RoleProtectedRoute allowedRoles={["deliveryman"]} />}>
        <Route path="/dashboard/deliveryman" element={<DeliveryManDashBoard />} />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
