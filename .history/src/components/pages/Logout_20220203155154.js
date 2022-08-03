import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';

class Navigation extends Component {
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

export default NLogout;


<Link to="/about">
  <Button variant="outline-light" size="lg">
    about
  </Button>
</Link>

export default Logout;


  