import { css } from "@emotion/react";

export const OuterCont = css`
  width: 100%;
  margin-bottom: 0;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const Heading = css`
  font-family: "K2D";
  font-style: normal;
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  color: #ffffff;
  margin-top: 104px;
  margin-bottom: 0;

  @media (max-width: 800px) {
    font-size: 38px;
    margin-top: 64px;
  }
  @media (max-width: 590px) {
    font-size: 20px;
    margin-top: 44px;
  }
`;
export const SubHead = css`
  width: 1061px;
  margin: auto;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 40px;
  margin-bottom: 0;

  @media (max-width: 1080px) {
    width: 800px;
    text-align: center;
  }
  @media (max-width: 800px) {
    width: 480px;
    font-size: 14px;
    margin-top: 5px;
  }
  @media (max-width: 480px) {
    width: 280px;
    font-size: 14px;
    margin-top: 5px;
  }
`;
export const ContentCont = css`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 120px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 80px;
  }
  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;
export const ChangableDivsCont = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 800px) {
    gap: 28px;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
export const CardsCss = css`
  width: 650px;
  height: 244px;
  box-sizing: border-box;
  background: #000000;
  border: 1px solid #00ff0a;
  border-radius: 24px;

  @media (max-width: 1250px) {
    width: 550px;
    height: 144px;
  }
  @media (max-width: 1030px) {
    width: 450px;
    height: 120px;
  }
  @media (max-width: 480px) {
    width: 250px;
    height: 100px;
  }
`;
export const ACardsText = css`
  color: #02ae09;
  width: 289px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  @media (max-width: 1030px) {
    width: auto;
    text-align: center;
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 13.5px;
  }
`;
export const ICardsText = css`
  color: #ffffff;
  width: 289px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  @media (max-width: 1030px) {
    width: auto;
    text-align: center;
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 13.5px;
  }
`;
export const MiddleImg = css`
  width: 409.84px;
  height: 578.57px;

  @media (max-width: 1250px) {
    width: 309.84px;
    height: 478.57px;
  }
  @media (max-width: 1030px) {
    width: 209.84px;
    height: 378.57px;
  }
  @media (max-width: 480px) {
    width: 109.84px;
    height: 278.57px;
    margin-top: -35px;
  }
`;
