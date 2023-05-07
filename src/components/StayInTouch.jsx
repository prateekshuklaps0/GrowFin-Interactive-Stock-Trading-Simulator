import { css } from "@emotion/react";
import { Box, Image, Text, Input, Center, Button } from "@chakra-ui/react";

export const OuterCont = css`
  margin-bottom: 0;
  margin-top: 120px;

  @media (max-width: 800px) {
    margin-top: 100px;
  }
  @media (max-width: 480px) {
    margin-top: 70px;
  }
`;
export const Heading = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
export const Container = css`
  width: 625.14px;
  height: 74.71px;
  background: #ffffff;
  border: 0.858712px solid rgba(115, 114, 114, 0.25);
  border-radius: 20.6091px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  @media (max-width: 800px) {
    width: 425.14px;
    height: 50.71px;
    padding: 0 18px;
    border-radius: 15.6091px;
  }
  @media (max-width: 480px) {
    width: 315.14px;
    height: 35.71px;
    padding: 0 12px;
    border-radius: 08.6091px;
  }
`;
export const InpCss = css`
  height: 33px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 27.4788px;
  line-height: 33px;
  letter-spacing: 0.005em;
  color: #000000;
  border: none;
  outline: none;

  :focus {
    outline: none;
    border: none;
    border: 1px solid white;
  }

  @media (max-width: 800px) {
    height: 20px;
    font-size: 18px;
  }
  @media (max-width: 480px) {
    height: 16px;
    font-size: 13px;
  }
`;
export const BtnCss = css`
  box-sizing: border-box;
  cursor: pointer;
  padding: 14px 47px 13px 46px;
  background: radial-gradient(
    94.79% 100.26% at 50% 50%,
    #1b6937 0%,
    #002d10 100%
  );
  border: 0.5px solid #00ff0a;
  border-radius: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17.1742px;
  line-height: 21px;
  letter-spacing: 0.005em;
  color: #faff00;

  :hover {
    background: radial-gradient(
      94.79% 100.26% at 50% 50%,
      #1b6937 0%,
      #002d10 100%
    );
    border: 0.5px solid #faff00;
  }

  @media (max-width: 800px) {
    padding: 08px 17px 07px 16px;
    border-radius: 14px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 4px 15.5px 4px 15px;
    border-radius: 10px;
    height: 30px;
    font-size: 12px;
  }
`;

function StayInTouch() {
  return (
    <Box css={OuterCont}>
      <Text css={Heading}>Stay In Touch !</Text>
      <Box css={Container}>
        <Input css={InpCss} placeholder="Enter Your Email" />
        <Button css={BtnCss}>Subscribe</Button>
      </Box>
    </Box>
  );
}
export default StayInTouch;
