import React, { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";

const PublicRoutes = ({children}:{children:ReactNode}) => {
  const {user} = useAuth();
  if(user) return <Navigate to="/"/>
  return children;
};

export default PublicRoutes;
