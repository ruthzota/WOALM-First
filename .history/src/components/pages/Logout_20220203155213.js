import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Logout extends Component {
  render () {
    return (
      <Columns className="has-vertical-centered is-mobile" multiline>
        <Columns.Column>
          <div className="field is-grouped is-pulled-right">
            <p className="control">
              <Link to="/account">
                <Button color="white" className="is-rounded">
                  <span>My Account</span>
                </Button>
              </Link>
            </p>
          </div>
        </Columns.Column>
      </Columns>
    );
  }
}

export default Logout;


<Link to="/about">
  <Button variant="outline-light" size="lg">
    about
  </Button>
</Link>



  