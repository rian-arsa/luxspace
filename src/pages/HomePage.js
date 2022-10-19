import React, { useEffect, useState } from "react";
import AsideMenu from "../parts/AsideMenu";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
// import dotenv from "dotenv";
import axios from "axios";

import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";
import useAccordion from "../helpers/hooks/useAccordion";

function HomePage() {
  useScrollAnchor();
  useModalDOM();
  useAccordion();

  // console.log(dotenv);

  // dotenv.config();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await axios
      .get(
        `https://3e74b340-7fd3-4f6f-b5d6-72ed4ed77871.mock.pstmn.io/api/products/?page=1&limit=10`
      )
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header theme={"white"} position={"absolute"} />
      <Hero />
      <BrowseRoom />
      <JustArrived products={products} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default HomePage;
