import React from 'react';
import useAuth from '../../../Hooks/CustomHooks/UseAuth/useAuth';
import useUser from '../../../Hooks/CustomHooks/UseUser/useUser';
import { Navigate } from 'react-router-dom';

const CustomerProtectedRoute = ({children}) => {

    const { user, loading } = useAuth();
  const { userInfo, isLoading } = useUser();

  if (loading || isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!userInfo || userInfo.role !== "customer") {
    return <Navigate to="/" replace />;
  }

  return children;
       
    
    
};

export default CustomerProtectedRoute;