import React, { Component } from "react";
import '../'

import Stuff from "../Stuff";
import InfoCard from "../InfoCard"
 
class FactoryEast extends Component {
  render() {
    return (
        <div className="wood-factory">
        <Stuff />
          <h1>Wood Factory</h1>
            
            <InfoCard />
             
          </div>
        
    );
  }
}
 

export default FactoryEast;