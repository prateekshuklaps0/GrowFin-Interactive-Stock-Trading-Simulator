import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Box, Highlight, Text, Image, Button } from "@chakra-ui/react";

const OuterCont = css`
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
const HeadText = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  margin-left: 6px;
  line-height: 78px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    margin-top: 0;
    margin-left: 0;
    font-size: 40px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;
const ContentCont = css`
  display: flex;
  justify-content: space-between;
  margin-top: 0;

  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    margin-top: -15px;
  }
`;

const TextCont = css`
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

const BtnCss = css`
  margin-top: 32px;
  width: 144.57px;
  height: 49.57px;
  box-sizing: border-box;
  background: radial-gradient(
    94.79% 100.26% at 50% 50%,
    #1b6937 0%,
    #002d10 100%
  );
  border: 0.516317px solid #00ff0a;
  border-radius: 33.0443px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16.5222px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    font-weight: 600;
    color: #faff00;
    border: 0.516317px solid #faff00;
  }

  @media (max-width: 800px) {
    width: 124.57px;
    height: 38.57px;
  }
  @media (max-width: 480px) {
    width: 104.57px;
    height: 35.57px;
    font-size: 13.5222px;
  }
`;

function ContentText({ headText, ConText, BtnText, Wid, Hgt }) {
  const Vertical = css`
    width: 12px;
    height: ${Hgt};
    margin-right: 36px;
    background: linear-gradient(180deg, #000000 -8.27%, #00ff0a 130.31%);

    @media (max-width: 800px) {
      display: none;
    }
    @media (max-width: 480px) {
    }
  `;
  const TextCss = css`
    margin-top: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    width: ${Wid};
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 0;

    @media (max-width: 800px) {
      font-size: 20px;
      width: 350px;
    }
    @media (max-width: 480px) {
      width: 250px;
      font-size: 16px;
    }
  `;

  return (
    <Box css={OuterCont}>
      <Text css={HeadText}>{headText}</Text>
      <Box css={ContentCont}>
        <Box css={Vertical}></Box>
        <Box css={TextCont}>
          <Text css={TextCss}>
            <Highlight styles={{ color: "#faff00" }} query="Grow Fin">
              {ConText}
            </Highlight>
          </Text>
          <Button css={BtnCss}>{BtnText}</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentText;
