import React, { Component } from "react";
import Stuff from "../Stuff";
import InfoCard from "../InfoCard"
import ContactForm from "../ContactForm";
import LikeButton from "../LikeButton";
import '../FactoryEast.css'
 
class FactoryEast extends Component {
  render() {
    return (
      <Link to="/">
      <Button type="submit" className="logout-btn">
      Logout
      </Button>
    </Link>
        <div className="chem-factory">
        <Stuff />
          <h1>Pan Africa Chemicals Ltd.</h1>

            <LikeButton />
            <InfoCard />
            <ContactForm />
            
             
          </div>
        
    );
  }
}
 

export default FactoryEast;