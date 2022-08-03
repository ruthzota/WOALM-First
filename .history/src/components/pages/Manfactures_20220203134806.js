import React from "react";
import './Manufactures.css'
import JSONDATA from '../../factory.json';
import {useState} from 'react';
import { Button } from "react-bootstrap";
import {Button4} from '../Button';



function Manfactures() {
  const [searchTerm, setSearchTerm] = useState("");
    return (
    <div className="factory">
      <input type="text"
       placeholder="Search..."
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
        <div className="country">Country: {val.Country}</div>
        <div className="products">Products: {val.Products}</div>
        <div className="email">Email: {val.Email}</div>
        <div className="address">Address: {val.Address}</div>
        
        <Button className="btn-submit" type="submit">View Factory</Button>
  
      </div>
      
      );
    })}
    <Button4 / className="logout-butt">
    </div>
    );
  }




  export default Manfactures;

