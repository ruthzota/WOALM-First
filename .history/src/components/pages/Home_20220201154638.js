import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import a


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