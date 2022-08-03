import React from 'react';
import './Manufactures.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'      

function Logout() {
  const navigate = useNavigate()
  return (
      <button onClick={() => navigate("/")}>
        Go Home
      </button>
  );
}


export default Logout;


    <Link to="/">
    <Button type="submit" className="logout-btn">
    Logout
    </Button>
  </Link>