import { css } from "@emotion/react";
import { AuthContext } from "../Context/AuthContext";
import LogIn from "../Elements/LogIn";
import SignUp from "../Elements/SignUp";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Box,
  Image,
  Text,
  Input,
  Center,
  Spinner,
  useToast,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { ImEnter } from "react-icons/im";

// Styles -
const OuterCont = css`
  margin-bottom: 0;
  margin: auto;
  border: 0.516317px solid rgba(0, 255, 10, 0.75);
  width: 600px;
  height: 400px;
  border-radius: 20px;
  margin-top: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;

  :hover {
    border: 0.1px solid #faff00;
  }

  @media (max-width: 800px) {
    width: 450px;
    height: auto;
    border-radius: 18px;
    margin-top: 10px;
    padding: 0px 0px;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (max-width: 480px) {
    width: 305px;
    height: auto;
    border-radius: 16px;
    margin-top: 10px;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 25px;
    padding-bottom: 20px;
  }
`;
const IconOuterCont = css`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: row;
    width: 250px;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    flex-direction: row;
    width: 230px;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;
const IconCont = css`
  color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
const ActiveIcon = {
  color: "#FAFF00 ",
  cursor: "pointer",
  border: "1px solid transparent",
  outline: "none",
  margin: "auto",
  fontSize: "35px",
};

const InActiveIcon = {
  border: "1px solid transparent",
  color: "#FFFFFF",
  cursor: "pointer",
  outline: "none",
  margin: "auto",
  fontSize: "35px",
};
const ActiveText = css`
  color: #faff00;
  font-size: 24px;
  font-family: "K2D";
  margin-top: 10px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
const InActiveText = css`
  color: #ffffff;
  font-size: 24px;
  font-family: "K2D";
  margin-top: 10px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

function LogSign() {
  const { URL, isAuth, setAuth, setUserFound, userName, setUserName } =
    useContext(AuthContext);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Box css={OuterCont}>
      <Box css={IconOuterCont}>
        <Box onClick={() => setShowSignUp((prev) => false)} css={IconCont}>
          <FiLogIn style={showSignUp ? InActiveIcon : ActiveIcon} />
          <Text css={showSignUp ? InActiveText : ActiveText}>Log In</Text>
        </Box>
        <Box onClick={() => setShowSignUp((prev) => true)} css={IconCont}>
          <ImEnter style={!showSignUp ? InActiveIcon : ActiveIcon} />
          <Text css={!showSignUp ? InActiveText : ActiveText}> Sign Up</Text>
        </Box>
      </Box>

      {showSignUp ? (
        <SignUp URL={URL} />
      ) : (
        <LogIn
          userName={userName}
          setUserName={setUserName}
          URL={URL}
          setAuth={setAuth}
          setUserFound={setUserFound}
        />
      )}
    </Box>
  );
}
export default LogSign;

// #FAFF00; - yellow
