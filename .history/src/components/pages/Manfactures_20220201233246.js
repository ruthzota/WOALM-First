import React from "react";
import  '../../App.css';
import JSONDATA from '../../factory.json';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { click } from "@testing-library/user-event/dist/click";





function Manfactures() {
  const [searchTerm, setSearchTerm] = useState("");
    return (
    <div className="factory">
      <input type="text"
       placeholder="search..."
       value={searchTerm}
        onChange={event => {
          setSearchTerm(event.target.value);
    }}
    />
    

    {JSONDATA.filter((val) => {
      if(val === "") {
        return false
      }
      if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true
      }
      return false
    }).map((val, key) => {
      return (
      <div className="user" key={key}>
        <div></div>
        <p>{val.name}</p>

        <Link to="/account">
        <Button color="white" className="is-rounded">
          <span>My Account</span>
        </Button>
      </Link>
        
       

        
        
      </div>
      
      );
    })}
    </div>
    );
  }









  export default Manfactures;

