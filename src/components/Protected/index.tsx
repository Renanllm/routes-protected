import React from "react";
import { Navigate } from "react-router-dom";
import client from "../../client";
import { useQuery } from "react-query";

export const Protected = ({ children }) => {
  const { isLoading, error } = useQuery("isValidToken", () =>
    client.post("/auth/validate")
  );

  if (error) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <>{children}</>;
};
