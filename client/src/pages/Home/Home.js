import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";
import About from "./About/About";
import Team from "./Team/Team";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <About />
      <Team />
{/*       
      <Footer />  */}
    </>
  );
};

export default Home;
