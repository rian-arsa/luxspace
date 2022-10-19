import React from "react";
import Header from "../parts/Header";
// import Breadcrumb from "../components/Breadcrumb";
import CompleteYourRoom from "../parts/Cart/CompleteYourRoom";
import AsideMenu from "../parts/AsideMenu";
import Footer from "../parts/Footer";

function CartPage() {
  return (
    <>
      <Header theme={"black"} position={"fixed"} />
      {/* <Breadcrumb /> */}
      <CompleteYourRoom />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default CartPage;
