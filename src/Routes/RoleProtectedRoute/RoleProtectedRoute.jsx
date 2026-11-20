
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/CustomHooks/UseAuth/useAuth";
import useUser from "../../Hooks/CustomHooks/UseUser/useUser";
// import { useAuth } from "../context/AuthProvider";

const dashboardPaths = {
  customer: "/dashboard/customer",
  admin: "/dashboard/admin",
  deliveryman: "/dashboard/deliveryman",
};

function RoleProtectedRoute({allowedRoles,children }) {
  const { user, loading } = useAuth();
  const{userInfo,isLoading} = useUser();
  // console.log(allowedRoles);

  // Wait for authentication data
  if (loading || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-semibold text-blue-700">
          Checking authentication...
        </p>
      </div>
    );
  }

  // User is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }
console.log(userInfo)
  console.log(`user:${user.email},userInfo:${userInfo?.email}`)
  // Check user role
  // if (allowedRoles.includes(userInfo?.role)) {
  //   console.log('inside from role protected route')
    // const correctPath = dashboardPaths[userInfo?.role] || "/";

    // console.log(correctPath);
    // return <Navigate to={correctPath} replace />;
    if(allowedRoles == userInfo?.role){
      console.log(allowedRoles,userInfo.role)
      return <Navigate to={dashboardPaths[allowedRoles] || "/"} replace />;
    }
    // return  <Navigate to={dashboardPaths[allowedRoles] || "/"} replace />;
  

  
  // return <Outlet />;
}

export default RoleProtectedRoute;
