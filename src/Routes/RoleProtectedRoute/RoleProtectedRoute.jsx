
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/CustomHooks/UseAuth/useAuth";
// import { useAuth } from "../context/AuthProvider";

const dashboardPaths = {
  customer: "/dashboard/customer",
  admin: "/dashboard/admin",
  deliveryman: "/dashboard/deliveryman",
};

function RoleProtectedRoute({ allowedRoles }) {
  const { user, loading } = useAuth();

  // Wait for authentication data
  if (loading) {
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

  // Check user role
  if (!allowedRoles.includes(user.role)) {
    const correctPath = dashboardPaths[user.role] || "/";

    return <Navigate to={correctPath} replace />;
  }

  return <Outlet />;
}

export default RoleProtectedRoute;
