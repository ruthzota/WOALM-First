import React, { Component } from "react";
import Contact from "../contact";
import Stuff from "../Stuff";
import InfoCard from "../InfoCard"
 
class FactoryEast extends Component {
  render() {
    return (
        <div>
          <h1>Simple SPA</h1>
            
            <Contact />
            <InfoCard />
             
          </div>
        </div>
    );
  }
}
 

export default FactoryEast;