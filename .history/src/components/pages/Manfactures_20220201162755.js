import React from "react";
import  '../../App.css';
import JSONDATA from '../../factory.json';
import {useState} from 'react' 


function Home() {
  return (
    <>
    <h1>Home</h1>
    <button onClick={()=> app.auth().signout()}>Sign Out</button>
      <HeroSection />
      <Cards />
      
    </>
  );
}

export default Home;


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

