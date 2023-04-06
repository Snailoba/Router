import React from "react";
import { Navigate } from "react-router-dom";

function Admin({ userLogin, setUserLogin }) {
  const handleLogout = () => setUserLogin(false);

  if (!userLogin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <img src="assets/MadamCurie.jpg" />
      <h1>This is Admim Page</h1>
      <button className="buttonLogin" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Admin;
