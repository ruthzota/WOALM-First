import React, { Component } from "react";
import Contact from "../contact";
import Stuff from "../Stuff";
 
class FactoryEast extends Component {
  render() {
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
            <Stuff />
            <Contact />
            <Info
             
          </div>
        </div>
    );
  }
}
 

export default FactoryEast;