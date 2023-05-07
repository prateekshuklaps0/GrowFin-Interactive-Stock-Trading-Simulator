import { css } from "@emotion/react";
import { AuthContext } from "../Context/AuthContext";
import { useState, useEffect, useContext, useReducer } from "react";
import {
  Box,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
  HStack,
  PinInput,
  PinInputField,
  Center,
  Spinner,
  Highlight,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const OuterCont = css`
  width: 90%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 800px) {
    display: none;
  }
`;
const HiText = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 78px;
  color: #ffffff;
  margin-right: 10px;

  @media (max-width: 800px) {
    display: none;
  }
`;
const ButtonCss = css`
  background: #000000;
  border: 0.5px solid #00ff0a;
  border-radius: 8px;
  font-size: 13px;
  height: 22px;
  width: 65px;
  padding-bottom: 2px;
  color: white;

  :hover {
    background: #000000;
    border: 0.5px solid #faff00;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

function LogOut() {
  const toast = useToast();
  const { isAuth, setAuth, userName, setUserName, userFound, setUserFound } =
    useContext(AuthContext);

  const handleLogOut = () => {
    toast({
      title: `Logged Out`,
      status: "success",
      isClosable: false,
      position: "top",
    });
    setAuth((prev) => false);
  };

  return (
    <Box css={OuterCont}>
      <Text css={HiText}>Hi {userName} !</Text>
      <Button css={ButtonCss} onClick={handleLogOut}>
        Log Out
      </Button>
    </Box>
  );
}
export default LogOut;
