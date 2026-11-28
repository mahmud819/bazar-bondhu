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
import DashboardRedirect from "../DashBoard/DashboardRedirect/DashboardRedirect.jsx";
import CustomerProtectedRoute from "./RoleProtectedRoute/CustomerProtectedRoute/CustomerProtectedRoute.jsx";
import AdminProtectedRoute from "./RoleProtectedRoute/AdminProtectedRoute/AdminProtectedRoute.jsx";
import DeliverymanProtectedRoute from "./RoleProtectedRoute/DeliverymanProtectedRoute/DeliverymanProtectedRoute.jsx";
import AdminHome from "../DashBoard/AdminDashBoard/AdminPages/AdminHome/AdminHome.jsx";
import ManageProducts from "../DashBoard/AdminDashBoard/AdminPages/ManageProducts/ManageProducts.jsx";
import ManageOrders from "../DashBoard/AdminDashBoard/AdminPages/ManageOrders/ManageOrders.jsx";
import ManageUsers from "../DashBoard/AdminDashBoard/AdminPages/ManageUsers/ManageUsers.jsx";
import ManageDelivery from "../DashBoard/AdminDashBoard/AdminPages/ManageDelivery/ManageDelivery.jsx";
import Reports from "../DashBoard/AdminDashBoard/AdminPages/Reports/Reports.jsx";
import AdminSetting from "../DashBoard/AdminDashBoard/AdminPages/Setting/AdminSetting.jsx";
import CustomerHome from "../DashBoard/CustomerDashBoard/CustomerPages/CustomerHome/CustomerHome.jsx";
import MyOrders from "../DashBoard/CustomerDashBoard/CustomerPages/MyOrders/MyOrders.jsx";
import MyWishList from "../DashBoard/CustomerDashBoard/CustomerPages/MyWishList/MyWishList.jsx";
import MyProfile from "../DashBoard/CustomerDashBoard/CustomerPages/MyProfile/MyProfile.jsx";
import AddressBook from "../DashBoard/CustomerDashBoard/CustomerPages/AddressBook/AddressBook.jsx";
import Support from "../DashBoard/CustomerDashBoard/CustomerPages/Support/Support.jsx";
import DeliverymanHome from "../DashBoard/DeliveryManDashBoard/DeliverManPages/DeliveryManHome/DeliveryManHome.jsx";
import MyDeliveries from "../DashBoard/DeliveryManDashBoard/DeliverManPages/MyDeliveries/MyDeliveries.jsx";
import Earnings from "../DashBoard/DeliveryManDashBoard/DeliverManPages/Earnings/Earnings.jsx";
import DeliveryProfile from "../DashBoard/DeliveryManDashBoard/DeliverManPages/Profile/DeliveryProfile.jsx";
import DeliverySupport from "../DashBoard/DeliveryManDashBoard/DeliverManPages/Support/DeliverySupport.jsx";
import ManageDeliverymen from "../DashBoard/AdminDashBoard/AdminPages/ManageDeliveryMan/ManageDeliveryMen.jsx";
import ManageCustomers from "../DashBoard/AdminDashBoard/AdminPages/ManageCustomer/ManageCutomer.jsx";
import Payments from "../DashBoard/AdminDashBoard/AdminPages/Payments/Payments.jsx";
import ManageCategories from "../DashBoard/AdminDashBoard/AdminPages/ManageCategories/ManageCategories.jsx";
import Orders from "../Pages/MyOrder/Orders.jsx";
import FlowOrder from "../Pages/TrackOrder/FlowOrder.jsx";
// import useUser from "../Hooks/CustomHooks/UseUser/useUser.jsx";
// import DashBoardLayout from '../Layout/DashBoardLayout/DashBoardLayout.jsx'



function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/placeOrder" element={<PlaceOrder></PlaceOrder>} />
        <Route path="/myOrder" element={<Orders></Orders>} />
        <Route path="/trackOrder" element={<TrackOrder></TrackOrder>} />
        {/* <Route path="/flowOrder" element={<FlowOrder></FlowOrder>} /> */}
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/aboutUs" element={<About></About>} />
        {/* <Route path="/dashBoard" element={<DashBoard></DashBoard>} /> */}
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
      
        <Route path="/dashboard/customer" element={<CustomerProtectedRoute><CustomerDashBoard /></CustomerProtectedRoute>} >
          <Route path="/dashboard/customer/customerHome" element={<CustomerHome></CustomerHome>} />
          <Route path="/dashboard/customer/myOrders" element={<MyOrders></MyOrders>} />
          <Route path="/dashboard/customer/myWishlist" element={<MyWishList></MyWishList>} />
          <Route path="/dashboard/customer/myProfile" element={<MyProfile></MyProfile>} />
          <Route path="/dashboard/customer/addressBook" element={<AddressBook></AddressBook>} />
          <Route path="/dashboard/customer/support" element={<Support></Support>} />
        </Route>
      
      

      {/* Admin Dashboard */}
      
        <Route path="/dashboard/admin" element={<AdminProtectedRoute><AdminDashBoard /></AdminProtectedRoute>} >
          <Route path="/dashboard/admin/adminHome" element={<AdminHome></AdminHome>} />
          <Route path="/dashboard/admin/manageProducts" element={<ManageProducts></ManageProducts>} />
          <Route path="/dashboard/admin/manageOrders" element={<ManageOrders></ManageOrders>} />
          <Route path="/dashboard/admin/manageUsers" element={<ManageUsers></ManageUsers>} />
          <Route path="/dashboard/admin/manageCustomers" element={<ManageCustomers></ManageCustomers>} />
          <Route path="/dashboard/admin/manageCategories" element={<ManageCategories></ManageCategories>} />
          <Route path="/dashboard/admin/manageDelivery" element={<ManageDelivery></ManageDelivery>} />
          <Route path="/dashboard/admin/manageDeliveryMen" element={<ManageDeliverymen></ManageDeliverymen>} />
          <Route path="/dashboard/admin/reports" element={<Reports></Reports>} />
          <Route path="/dashboard/admin/payments" element={<Payments></Payments>} />
          <Route path="/dashboard/admin/settings" element={<AdminSetting></AdminSetting>} />
        </Route>
      

      {/* Deliveryman Dashboard */}
      
        <Route path="/dashboard/deliveryman" element={<DeliverymanProtectedRoute><DeliveryManDashBoard /></DeliverymanProtectedRoute>} >
          <Route path="/dashboard/deliveryman/deliverymanHome" element={<DeliverymanHome></DeliverymanHome>} />
          <Route path="/dashboard/deliveryman/myDeliveries" element={<MyDeliveries></MyDeliveries>} />
          <Route path="/dashboard/deliveryman/earnings" element={<Earnings></Earnings>} />
          <Route path="/dashboard/deliveryman/profile" element={<DeliveryProfile></DeliveryProfile>} />
          <Route path="/dashboard/deliveryman/support" element={<DeliverySupport></DeliverySupport>} />
        </Route>
      

      {/* Not Found */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
