import React from "react";
import app from "./base";

const LogoutButton = () => {
  return (
    <>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default LogoutButton;