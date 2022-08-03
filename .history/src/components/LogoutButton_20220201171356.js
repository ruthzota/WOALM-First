import React from "react";
import app from "./base";

const LogoutButton = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default LogoutButton;