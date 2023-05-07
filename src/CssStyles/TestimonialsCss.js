import { css } from "@emotion/react";

export const OuterCont = css`
  width: 100%;
  text-align: center;
  margin-top: 124.16px;
  margin-bottom: 0;

  @media (max-width: 800px) {
    margin-top: 84.16px;
  }
  @media (max-width: 480px) {
    margin-top: 44.16px;
  }
`;

export const Head = css`
  margin-bottom: 0;
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 78px;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: 45px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const InnerCont = css`
  position: relative;
  text-align: center;
  margin-bottom: 0;
  width: 100%;
  margin-top: 126px;
  box-shadow: 0px 125px 200px 50px rgba(0, 0, 0, 0.25);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 0;
    background: linear-gradient(180deg, #050505 0%, #002b02 100%);
    filter: blur(50px);
    box-shadow: 0px 125px 200px 50px rgba(0, 0, 0, 0.25);
  }

  z-index: 1;
  @media (max-width: 1330px) {
  }
  @media (max-width: 800px) {
    margin-top: 76px;
  }
  @media (max-width: 480px) {
    margin-top: 36px;
  }
`;

export const Container = css`
  position: relative;
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  text-align: center;

  @media (max-width: 1150px) {
    width: 95%;
  }
  @media (max-width: 800px) {
    width: 98%;
    margin-left: 45px;
  }
  @media (max-width: 650px) {
    width: 98%;
    margin-left: 25px;
  }
  @media (max-width: 480px) {
    margin-left: 5px;
  }
`;

export const LeftArrow = css`
  width: 61.69px;
  height: 61.69px;
  margin-right: 64px;
  cursor: pointer;

  @media (max-width: 1330px) {
    width: 61.69px;
    height: 61.69px;
    margin-right: 44px;
  }
  @media (max-width: 1150px) {
    width: 51.69px;
    height: 51.69px;
    margin-right: 18px;
  }
  @media (max-width: 800px) {
    width: 31.69px;
    height: 31.69px;
    margin-right: 5px;
  }
  @media (max-width: 480px) {
    margin-right: 0px;
  }
`;

export const RightArrow = css`
  margin-left: 64px;
  cursor: pointer;
  width: 61.69px;
  height: 61.69px;

  @media (max-width: 1330px) {
    width: 61.69px;
    height: 61.69px;
    margin-left: 44px;
  }
  @media (max-width: 1150px) {
    width: 51.69px;
    height: 51.69px;
    margin-left: 18px;
  }
  @media (max-width: 800px) {
    width: 31.69px;
    height: 31.69px;
    margin-left: 5px;
  }
  @media (max-width: 480px) {
    margin-left: 0;
  }
`;

export const CardsCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 1330px) {
  }
  @media (max-width: 480px) {
  }
`;

export const SideCards = css`
  cursor: pointer;
  width: 289px;
  height: 368px;
  background: #000000;
  border: 1px solid rgba(0, 255, 10, 0.5);
  border-radius: 16px;
  overflow: hidden;

  :hover {
    border: 1px solid #faff00;
  }

  @media (max-width: 1330px) {
    width: 249px;
    height: 328px;
  }
  @media (max-width: 1150px) {
    width: 189px;
    height: 348px;
  }
  @media (max-width: 800px) {
    width: 115px;
    height: 415px;
  }
  @media (max-width: 480px) {
    display: none;
    width: 70px;
    height: 596px;
  }
`;

export const SideImg = css`
  width: 100px;
  height: 100px;
  margin-top: 24px;

  @media (max-width: 800px) {
    width: 80px;
    height: 80px;
    margin-top: 18px;
  }
  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
    margin-top: 10px;
  }
`;

export const SideText = css`
  width: 85%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin: auto;
  margin-top: 26px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 1330px) {
    line-height: auto;
    font-size: 12px;
    margin-top: 24px;
    width: 88%;
  }
  @media (max-width: 1150px) {
    font-size: 12px;
    margin-top: 18px;
    width: 90%;
  }
  @media (max-width: 800px) {
    font-size: 11px;
    margin-top: 16px;
  }
  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const MiddleCard = css`
  cursor: pointer;
  width: 362px;
  height: 463px;
  background: #000000;
  border: 1px solid rgba(0, 255, 10, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  :hover {
    border: 1px solid #faff00;
  }

  @media (max-width: 1330px) {
    width: 322px;
    height: 423px;
  }
  @media (max-width: 1150px) {
    width: 242px;
    height: 469px;
  }
  @media (max-width: 800px) {
    width: 145px;
    height: 555px;
  }
  @media (max-width: 480px) {
    margin: auto;
    width: 240px;
    height: 455px;
  }
`;
export const MiddleImg = css`
  width: 125px;
  height: 125px;
  border: 1px solid #00ff0a;
  border-radius: 16px;
  margin-top: 35px;

  @media (max-width: 1330px) {
  }
  @media (max-width: 800px) {
    width: 105px;
    height: 105px;
    margin-top: 25px;
  }
  @media (max-width: 480px) {
    width: 170px;
    height: 170px;
    border-radius: 24px;
    margin-top: 16px;
  }
`;
export const MiddleText = css`
  width: 85%;
  margin: auto;
  margin-top: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 1330px) {
    line-height: auto;
    margin-top: 22px;
    font-size: 13.9px;
  }
  @media (max-width: 1150px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 95%;
    margin-top: 16px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    width: 95%;
    margin-top: 13px;
    font-size: 13px;
  }
`;
