import React from "react";
import  '../../App.css';
import JSONDATA from '../../factory.json';
import {useState} from 'react';
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

        <button className="btn-submit" onClick={click}> View Factory
          
        </button>
  
        
      </div>
      
      );
    })}
    </div>
    );
  }









  export default Manfactures;

