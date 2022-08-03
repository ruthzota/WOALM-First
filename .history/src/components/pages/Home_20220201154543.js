import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';


function Home() {
  return (
    <>
      <h1>Home</h1>
      <button onClick={()=> app.auth().signout()}
      <HeroSection />
      <Cards />
      
    </>
  );
}

export default Home;