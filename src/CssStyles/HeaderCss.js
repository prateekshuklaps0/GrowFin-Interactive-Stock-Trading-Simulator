import { css } from "@emotion/react";

export const OuterCont = css`
  text-align: center;
  overflow: hidden;
  z-index: 100;
  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const Logo = css`
  width: 149px;
  height: 171.56px;
  margin: auto;
  margin-top: 69px;

  @media (max-width: 900px) {
    width: 139px;
    height: 161.56px;
    margin-top: 55px;
  }
  @media (max-width: 800px) {
    width: 119px;
    height: 141.56px;
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    width: 99px;
    height: 121.56px;
    margin-top: 15px;
  }
`;
export const Heading = css`
  min-width: 607px;
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 83px;
  color: #ffffff;
  margin-top: 40px;

  @media (max-width: 800px) {
    font-size: 40px;
    min-width: 507px;
    margin-top: 10px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
    min-width: auto;
    margin-top: -10px;
  }
`;
export const Heading2 = css`
  color: #ffffff;
  font-family: "K2D";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  margin-top: 16px;
  line-height: 47px;

  @media (max-width: 800px) {
    font-size: 28px;
    margin-top: -5px;
  }
  @media (max-width: 480px) {
    font-size: 23px;
    margin-top: -10px;
  }
`;
export const TextCont = css`
  width: 1057px;
  height: 72px;
  margin: auto;
  margin-top: 16px;

  marg @media (max-width: 1070px) {
    width: 700px;
    height: auto;
  }
  @media (max-width: 800px) {
    width: 400px;
    height: auto;
  }
  @media (max-width: 480px) {
    width: 300px;
    height: auto;
    margin-top: 5px;
  }
`;
export const Texting = css`
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  @media (max-width: 1070px) {
  }
  @media (max-width: 800px) {
    font-size: 18px;
    margin-top: -5px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 0px;
  }
`;
// HeadInput Box Css
export const InputOuterCont = css`
  box-sizing: border-box;
  background: rgba(39, 142, 73, 0.25);
  border: 1px solid #00a407;
  border-radius: 24px;
  width: 91%;
  height: auto;
  margin: auto;
  margin-top: 100px;
  padding-top: 12px;
  padding-bottom: 46px;

  @media (max-width: 1050px) {
    width: 75%;
    margin-top: 60px;
    height: auto;
    padding-top: 2px;
    padding-bottom: 36px;
  }
  @media (max-width: 480px) {
    width: 75%;
    margin-top: 30px;
    height: auto;
    padding-top: -15px;
    padding-bottom: 26px;
  }
`;
export const InputCont = css`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 1050px) {
    height: auto;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    height: auto;
    margin-top: -15px;
  }
`;

export const Cards = css`
  text-align: center;
`;
export const CardText = css`
  height: 29px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  margin-top: 32px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const InputCss = css`
  border: 0.5px solid #00ff0a;
  box-sizing: border-box;
  background: #000000;
  border: 0.5px solid #00ff0a;
  border-radius: 8px;
  text-align: center;
  width: 215px;
  height: 48px;
  margin: auto;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  opacity: 0.7;
  margin-top: 32px;

  :focus {
    border: 0.5px solid #faff00;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    width: 180px;
    height: 33px;
  }
`;
