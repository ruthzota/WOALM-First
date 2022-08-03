import React from 'react';
import './Manufactures.css'
import { useNavigate} from 'react-router-dom'      

function Logout() {
  const navigate = useNavigate()
  return (
      <button onClick={() => navigate("/")}>
        Go Home
      </button>
  );
}


export default Logout;


  