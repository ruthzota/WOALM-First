import React from 'react';
import './Manufactures.css'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'




export default function SomeComponent() {
  const { push } = useHistory()
  
  <button
    type=""
    onClick={() => push('/some-link')}
  >
    Some link
  </button>
  
}

    <Link to="/">
    <Button type="submit" className="logout-btn">
    Logout
    </Button>
  </Link>