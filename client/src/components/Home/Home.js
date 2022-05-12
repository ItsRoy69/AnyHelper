import React from 'react';
import Navbar from "../Navbar/Navbar";
import Banner from './Banner/Banner';
import Service from './Service/Service';
import About from './About/About';
import Team from './Team/Team';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <About />
      <Team />
    </>
  )
}

export default Home
