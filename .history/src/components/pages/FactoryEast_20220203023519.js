import React, { Component } from "react";
import '../../App.css';
import Stuff from "../Stuff";
import InfoCard from "../InfoCard"
import ContactForm from "../ContactForm";
import LikeButton from "../LikeButton";
 
class FactoryEast extends Component {
  render() {
    return (
        <div className="wood-factory">
        <Stuff />
          <h1>Wood Factory</h1>
          
          <LikeButton />
            <InfoCard />
            <ContactForm />
            
             
          </div>
        
    );
  }
}
 

export default FactoryEast;