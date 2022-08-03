import React, { Component } from "react";

import Stuff from "../Stuff";
import InfoCard from "../InfoCard"
 
class FactoryEast extends Component {
  render() {
    return (
        <div>
        <Stuff />
          <h1>Simple SPA</h1>
            
            
            <InfoCard />
             
          </div>
        
    );
  }
}
 

export default FactoryEast;