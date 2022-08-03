import React, { Component } from "react";
import Contact from "../contact";
import Stuff from "../Stuff";
import InfoCard from "../InfoCard"
 
class FactoryEast extends Component {
  render() {
    return (
        <div>
        <Stuff />
          <h1>Simple SPA</h1>
            
            <Contact />
            <InfoCard />
             
          </div>
        
    );
  }
}
 

export default FactoryEast;