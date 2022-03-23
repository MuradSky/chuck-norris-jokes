import React from "react";
import { useRoutes, useLocation, Navigate } from "react-router-dom";
import routes from "./routes";

const systemRoutes = [{ path: "*", element: <Navigate to="/" /> }];

export const Router = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  const element = useRoutes(
    [...routes, ...systemRoutes],
    state?.backgroundLocation || location
  );
  return <div className="router">{element}</div>;
};
