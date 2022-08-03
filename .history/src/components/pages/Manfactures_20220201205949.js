import React from "react";
import  '../../App.css';
import JSONDATA from '../../factory.json';
import {useState} from 'react';






import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
	return (
		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name="Rita Correia"
				age="32"
				city="London"
				followers="80K"
				likes="803K"
				photos="1.4K"
			></ProfileCard>
		</div>
	);
}

export default App;











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
  
  export default Manfactures;

