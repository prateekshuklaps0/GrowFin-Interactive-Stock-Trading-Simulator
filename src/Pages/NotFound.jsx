import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box } from "@chakra-ui/react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function NotFound() {
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

    window.document.title = "Grow Fin | Page Not Found";
  }, []);

  return (
    <Box color="white">
      Not Found
      <FAQ />
      <Footer />
    </Box>
  );
}

export default NotFound;
