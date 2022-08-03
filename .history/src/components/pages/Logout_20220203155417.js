import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


class Logout extends Component {
  render () {
    return (
      
              <Link to="/">
                <Button color="white" className="logout-btn">
                  Logout
                </Button>
              </Link>
    );
  }
}

export default Logout;





  