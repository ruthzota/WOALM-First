import React, { Component } from "react";
import Stuff from "../Stuff";
import InfoCard from "../InfoCard"
import ContactForm from "../ContactForm";
import LikeButton from "../LikeButton";
import '../FactoryEast.css'
 
class FactoryEast extends Component {
  render() {
    return (
        <div className="chem-factory">
        <Stuff />
          <h1>Pan Africa Chemicals Ltd.</h1>

            <LikeButton />
            <InfoCard />
            <ContactForm />
            
             
          </div>
          <Link to="/">
          <Button type="submit" className="logout-btn">
          Logout
          </Button>
        </Link>
        
    );
  }
}
 

export default FactoryEast;