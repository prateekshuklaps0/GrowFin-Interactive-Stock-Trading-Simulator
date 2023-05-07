import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box } from "@chakra-ui/react";
import Middle from "../components/Middle";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";
import StayInTouch from "../components/StayInTouch";
import Footer from "../components/Footer";

function FaqPage() {
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
      return { x: 265, y: 1.5 };
    });

    setMenuSlide((prev) => {
      return { x: 10, y: 197 };
    });

    setHighlight((prev) => "FAQ");

    window.document.title = "Grow Fin | FAQ";
  }, []);

  return (
    <Box style={{}}>
      <Middle />
      <WhyUs />
      <StayInTouch />
      <FAQ />
      <Footer />
    </Box>
  );
}
export default FaqPage;
