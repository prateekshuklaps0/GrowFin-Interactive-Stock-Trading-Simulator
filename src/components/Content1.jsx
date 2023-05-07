import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Logo from "../Images/ContentImg/SignUp.svg";
import ContentText from "../Elements/ContenText";
import { Box, Highlight, Text, Image, Button } from "@chakra-ui/react";

const headText = "Sign Up";
const BtnText = "Sign Up";
const ConText =
  "Grow Fin the brokerage platform which helps the users to connect with the Investors and Fund Raisers.";

const Container = css`
  color: white;
  margin-top: 117px;
  margin-bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 159px;

  @media (max-width: 1109px) {
    flex-direction: column;
    text-align: center;
    padding: 0;
    gap: 50px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;
const ImgCss = css`
  width: 455px;
  height: 454px;

  @media (max-width: 800px) {
    width: 325px;
    height: 324px;
  }
  @media (max-width: 480px) {
    width: 225px;
    height: 224px;
  }
`;

function Content1() {
  return (
    <Box css={Container}>
      <ContentText
        headText={headText}
        ConText={ConText}
        BtnText={BtnText}
        Wid="450px"
        Hgt=""
      />
      <Image css={ImgCss} src={Logo} alt="SignUp" />
    </Box>
  );
}

export default Content1;
