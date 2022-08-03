import React from "react";
import  '../../App.css';
import JSONDATA from '../../factory.json';
import {useState} from 'react';
import FactoryCard from "../FactoryCard";





function Manfactures() {
  const [searchTerm, setSearchTerm] = useState("");
    return (
    <div className="factory">
      <input type="text"
       placeholder="search"
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
        <p>{val.name}</p>
      </div>
      );
    })}
    </div>
    );
  }

		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<FactoryCard
				name={name}
				age="32"
				city="London"
				followers="80K"
				likes="803K"
				photos="1.4K"
			></FactoryCard>
		</div>



  
  export default Manfactures;

