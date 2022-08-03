import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


class Logout extends Component {
  render () {
    return (
      
              <Link to="/account">
                <Button color="white" className="is-rounded">
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



  