import React from "react";
import  '../../App.css';
import JSONDATA from '../../factory.json';
import {useState} from 'react';
import { Button } from "react-bootstrap";





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
        <div>{val.url}</div>
        <p>{val.name}</p>
        <div className="country">{val.Country}</div>
        <div className="products">{val.Products}</div>
        <div className="email">{val.Email}</div>
        <div dddress>{val.Address}</div>
        
        <Button className="btn-submit">View Factory</Button>
  
      </div>
      
      );
    })}
    </div>
    );
  }


  export default Manfactures;

