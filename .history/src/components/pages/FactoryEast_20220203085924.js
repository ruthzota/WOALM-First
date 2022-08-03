import React, { Component } from "react";
import '../../App.css';
import Stuff from "../Stuff";
import InfoCard from "../InfoCard"
import ContactForm from "../ContactForm";
import LikeButton from "../LikeButton";
 
class FactoryEast extends Component {
  render() {
    return (
        <div className="-factory">
        <Stuff />
          <h1>Pan Africa Chemicals Ltd</h1>

            <LikeButton />
            <InfoCard />
            <ContactForm />
            
             
          </div>
        
    );
  }
}
 

export default FactoryEast;