import { css } from "@emotion/react";
import { useEffect, useContext, useState, useReducer } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import {
  Box,
  Badge,
  Avatar,
  Progress,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  AvatarBadge,
  AvatarGroup,
  Image,
  Highlight,
  InputGroup,
  InputLeftAddon,
  useToast,
  Text,
  Input,
  Center,
  Spinner,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  EditIcon,
  ExternalLinkIcon,
  PlusSquareIcon,
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import LogOut from "../Elements/LogOut";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LogSign from "../components2/LogSign";
import DataPage from "../components2/DataPage";

export const OuterCont = css`
  width: 92%;
  margin: auto;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

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
        <Box css={OuterCont}>
          <LogOut />
          <DataPage />
        </Box>
      )}

      <FAQ />
      <Footer />
    </Box>
  );
}
export default EnterApp;
