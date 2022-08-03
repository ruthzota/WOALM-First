import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import 


class Logout extends Component {
  render () {
    return (
      
              <Link to="/">
                <Button color="white" className="logout-btn" type="submit">
                  Logout
                </Button>
              </Link>
    );
  }
}

export default Logout;





  