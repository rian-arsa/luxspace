import React from "react";
import AsideMenu from "../parts/AsideMenu";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";

function HomePage() {
  return (
    <>
      <Header theme={"white"} position={"absolute"} />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default HomePage;
