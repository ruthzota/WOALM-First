import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


class Logout extends Component {
  render () {
    return (
      
              <Link to="/">
                <Button color="white" className="log">
                  <span>My Account</span>
                </Button>
              </Link>
    );
  }
}

export default Logout;


<Link to="/about">
  <Button variant="outline-light" size="lg">
    about
  </Button>
</Link>



  