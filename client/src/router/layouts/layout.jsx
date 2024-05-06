import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function Layout() {
  return (
    <div className="layout">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content">
          <div className="OutLet">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export { Layout, RequireAuth };
