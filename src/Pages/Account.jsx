import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box, Text } from "@chakra-ui/react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LogSign from "../components2/LogSign";

function Account() {
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
      return { x: 107, y: 1.5 };
    });

    setMenuSlide((prev) => {
      return { x: 10, y: 125 };
    });

    setHighlight((prev) => "Security");

    window.document.title = "Grow Fin | Security";
  }, []);

  return (
    <Box style={{ color: "white" }}>
      {!isAuth ? <LogSign /> : <Text>This is Account</Text>}

      <FAQ />
      <Footer />
    </Box>
  );
}
export default Account;
