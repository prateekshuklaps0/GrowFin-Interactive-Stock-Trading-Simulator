import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Logo from "../Images/ContentImg/Coins.svg";
import ContentText from "../Elements/ContenText";
import { Box, Highlight, Text, Image, Button } from "@chakra-ui/react";

const headText = "How To Invest";
const BtnText = "Invest";
const ConText =
  "Sign Up to the Grow Fin and update your profile to demonstrate how much would you like to Invest for the Interested Specific Business.";

const Container = css`
  color: white;
  margin-top: 156.53px;
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
    margin-top: 46.53px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;
const ImgCss = css`
  width: 533px;
  height: 419px;

  @media (max-width: 800px) {
    width: 325px;
    height: 324px;
  }
  @media (max-width: 480px) {
    width: 225px;
    height: 224px;
  }
`;

function Content3() {
  return (
    <Box css={Container}>
      <ContentText
        headText={headText}
        ConText={ConText}
        BtnText={BtnText}
        Wid="499px"
        Hgt=""
      />
      <Image css={ImgCss} src={Logo} alt="SignUp" />
    </Box>
  );
}

export default Content3;
