import React, { useEffect } from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Congrats from "../parts/Congrats";
import AsideMenu from "../parts/AsideMenu";
import Footer from "../parts/Footer";

function CongratulationPage() {
  return (
    <>
      <Header theme={"black"} position={"fixed"} />
      <Breadcrumb />
      <Congrats />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default CongratulationPage;
