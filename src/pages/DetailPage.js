import React from "react";
import AsideMenu from "../parts/AsideMenu";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Details from "../parts/Details";
import CompleteYourRoom from "../parts/CompleteYourRoom";

function DetailPage() {
  return (
    <>
      <Header theme={"black"} position={"fixed"} />
      <Breadcrumb />
      <Details />
      <CompleteYourRoom />

      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default DetailPage;
