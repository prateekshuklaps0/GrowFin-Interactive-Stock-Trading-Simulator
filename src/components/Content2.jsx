import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Logo from "../Images/ContentImg/Phone.svg";
import ContentText from "../Elements/ContenText";
import { Box, Highlight, Text, Image, Button } from "@chakra-ui/react";

const headText = "How to Raise Funds";
const BtnText = "Scale Up";
const ConText =
  "Sign In to the Grow Fin and describe your Domain or specific Niche in your profile to get the investors attention.";

const Container = css`
  color: white;
  margin-top: 125.86px;
  margin-bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 159px;

  @media (max-width: 1109px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0;
    gap: 15px;
    margin-top: 65.86px;
  }
  @media (max-width: 480px) {
    gap: 5px;
    margin-top: 45.86px;
  }
`;
const ImgCss = css`
  width: 461px;
  height: 461px;

  @media (max-width: 800px) {
    width: 325px;
    height: 324px;
  }
  @media (max-width: 480px) {
    width: 225px;
    height: 224px;
  }
`;

function Content2() {
  return (
    <Box css={Container}>
      <Image css={ImgCss} src={Logo} alt="SignUp" />
      <ContentText
        headText={headText}
        ConText={ConText}
        BtnText={BtnText}
        Wid="476px"
        Hgt=""
      />
    </Box>
  );
}

export default Content2;
