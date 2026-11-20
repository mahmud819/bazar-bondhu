import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/CustomHooks/UseAuth/useAuth";
import useUser from "../../Hooks/CustomHooks/UseUser/useUser";
import { useState } from "react";
import RoleProtectedRoute from "../../Routes/RoleProtectedRoute/RoleProtectedRoute";
// import useUser from "../../Hooks/CustomHooks/UseUser/useUser";

function DashboardRedirect() {
  const { user, loading } = useAuth();
  const{userInfo,isLoading}=useUser();
  // const [isLoading,setIsLoading]= useState(false);
  console.log(userInfo?.role)

//   if(!userInfo){
//     console.log('from user info checking from useUser')
//     setIsLoading(true);
//   }
  if (loading||isLoading) return <div className="p-10 text-center">Loading...</div>;
  

  if(!userInfo){
    console.log('user return from dashboard redirect')
    return
  }
  if (!user) return <Navigate to="/login" replace />;

  const dashboardPaths = {
    customer: "/dashboard/customer",
    admin: "/dashboard/admin",
    deliveryman: "/dashboard/deliveryman",
  };

  return <Navigate to={dashboardPaths[userInfo?.role] || "/"} replace />;
//  return <Navigate to={"/dashboard/customer" || "/"} 
// replace />;
//  return <RoleProtectedRoute allowedRoles={userInfo?.role}></RoleProtectedRoute> 
}

export default DashboardRedirect