import React from 'react';
import './Manufactures.css'
import { useNavigate } from 'react-router-dom'      

function Logout() {
  const navigate = useNavigate()
  return (
      <button onClick={() => navigate("/")}>
        Go Home
      </button>
  );
}



<Link to="/about">
  <Button variant="outline-light" size="lg">
    about
  </Button>
</Link>

export default Logout;


  