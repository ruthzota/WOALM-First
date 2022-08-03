import React, { Component } from "react";
import '../../App.css';

import Stuff from "../Stuff";
import InfoCard from "../InfoCard"
 
class FactoryEast extends Component {
  render() {
    return (
        <div className="wood-factory">
        <Stuff />
          <h1>Wood Factory</h1>
            
            <InfoCard />
            <Contact
             
          </div>
        
    );
  }
}
 

export default FactoryEast;