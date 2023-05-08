import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box, Text } from "@chakra-ui/react";
import LogOut from "../Elements/LogOut";
import Stocks from "../components2/Stocks";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LogSign from "../components2/LogSign";

function EnterApp() {
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
      return { x: 428, y: 1.5 };
    });

    setMenuSlide((prev) => {
      return { x: 10, y: 271 };
    });

    setHighlight((prev) => "Enter App");

    window.document.title = "Grow Fin | PortFolio";
  }, []);

  return (
    <Box style={{ color: "white" }}>
      {!isAuth ? (
        <LogSign />
      ) : (
        <Box>
          <LogOut />
          <Stocks />
        </Box>
      )}

      <FAQ />
      <Footer />
    </Box>
  );
}
export default EnterApp;
