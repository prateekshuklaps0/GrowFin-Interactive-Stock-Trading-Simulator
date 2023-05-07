import { css } from "@emotion/react";

// Container
export const NavOuterCont = css`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  background: linear-gradient(
    180deg,
    rgba(0, 255, 10, 0.5) -214.75%,
    rgba(0, 0, 0, 0.5) 100%
  );

  @media (max-width: 900px) {
    padding-left: 50px;
    padding-right: 50px;
    height: 100px;
  }

  @media (max-width: 900px) {
  }

  @media (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
    height: 70px;
  }
`;
// Logo
export const NavLogoCont = css`
  width: 81.58px;
  height: 93.88px;
  text-align: center;
  top: 56px;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
export const LogoImage = css`
  width: 100%;
  height: 100%;
  margin: auto;
`;

// Right Items
export const RightCont = css`
  width: 542.13px;
  height: 49.57px;
  top: 76px;

  @media (max-width: 900px) {
  }

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-width: 480px) {
  }
`;
export const TextHolder = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ActiveLink = css`
  color: #faff00;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16.5222px;
  line-height: 20px;
  margin-top: 15px;
  cursor: pointer;
  z-index: 50;
`;
export const InActiveLink = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  margin-top: 15px;
  font-size: 16.5222px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
  z-index: 50;
`;
export const SlideBoxCont = css`
  box-sizing: border-box;
  position: absolute;
`;

// Menu Css
export const MenuOuterCont = css`
  display: none;

  @media (max-width: 900px) {
  }

  @media (max-width: 800px) {
    display: initial;
  }

  @media (max-width: 480px) {
    display: initial;
  }
`;
export const MenuIcon = css`
  color: #00be0d;
  border: 1px solid #92b700;
  border-radius: 10px;
  padding-left: 7px;
  padding-right: 7px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;
export const CloseBtn = css`
  color: #00be0d;
  width: 25px;
  height: 25px;
  cursor: pointer;
  @media (max-width: 480px) {
  }
`;
export const DrawerCss = css`
  background: linear-gradient(
    0deg,
    rgba(4, 97, 4, 0.955) 0%,
    rgb(1, 42, 60) 100%
  );
  overflow-y: scroll;
  display: none;

  @media (max-width: 800px) {
    display: initial;
  }
`;
export const ContentCont = css`
  margin-top: -30px;
`;

export const DrawerSlide = css``;

export const LinkHolder = css`
  width: 162px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 39px;
`;

export const LogOutBtn = css`
  margin: auto;
  margin-top: 30px;
  color: white;
  font-size: 16px;
  padding: 10px 25px 10px 25px;
  border-radius: 14px;
  background: transparent;
  border: 0.516317px solid yellow;

  :hover {
    color: yellow;
  }
`;
