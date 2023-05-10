import { css } from "@emotion/react";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import LogOut from "../Elements/LogOut";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import Content3 from "../components/Content3";
import Middle from "../components/Middle";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Trusted from "../components/Trusted";
import FAQ from "../components/FAQ";
import StayInTouch from "../components/StayInTouch";
import Footer from "../components/Footer";

import Card from "../components/TESTING";

const LandingPageCont = css`
  width: 100%;
`;

function LandingPage() {
  const {
    URL,
    sliderVal,
    setSliderVal,
    menuSlide,
    setMenuSlide,
    highlight,
    setHighlight,
    isAuth,
    setAuth,
    userFound,
    setUserFound,
  } = useContext(AuthContext);

  useEffect(() => {
    setSliderVal((prev) => {
      return { x: -50, y: 1.5 };
    });

    setMenuSlide((prev) => {
      return { x: 10, y: 51 };
    });

    setHighlight((prev) => "Docs");

    axios({
      url: `${URL}/users`,
      method: "get",
    });

    document.title = `Prateek Shukla | Grow Fin`;
  }, []);

  return (
    <Box css={LandingPageCont}>
      {isAuth && <LogOut />}
      <Header />
      <Header2 />
      <Content1 />
      <Content2 />
      <Content3 />
      <Middle />
      <WhyUs />
      <Testimonials />
      <Trusted />
      <FAQ />
      <StayInTouch />
      <Footer />
      {/* <Card /> */}
    </Box>
  );
}

export default LandingPage;
