import { css } from "@emotion/react";
// #FAFF00; - yellow
// #ffffff; - white
// 00ff0a - green
// background: #000000;
// border: 1px solid #00ff0a;

export const OuterBox = css`
  color: #ffffff;
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;
export const PagesCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 228px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    width: 177px;
    border-radius: 5px;
  }
`;
export const PageDisplayCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: #000000;
  border: 1px solid #00ff0a;
  text-align: center;
  width: 105px;
  font-family: Inter;
  height: 39px;
  padding: 0px 15px 0px 15px;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    border-radius: 5px;
    width: 85px;
    height: 32px;
    padding: 0px 9px 0px 9px;
    font-size: 14px;
  }
`;
export const NextPrevBtn = css`
  color: white;
  background: #000000;
  border: 1px solid #00ff0a;
  border-radius: 10px;
  text-align: center;

  :hover {
    background: #000000;
    border: 1px solid #faff00;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    border-radius: 6px;
    width: 10px;
    height: 32px;
    font-size: 16px;
  }
`;
export const ArrowIconsCss = css`
  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const GoToCont = css`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  margin-left: 15px;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    width: 100px;
    font-size: 14px;
    margin-left: 10px;
  }
`;
export const GoToBtn = css`
  color: white;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background: #000000;
  border: 1px solid #00ff0a;
  font-family: Inter;
  width: 150px;

  text-align: center;

  :hover {
    background: #000000;
    border: 1px solid #faff00;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 32px;
  }
`;
export const GoToInput = css`
  color: white;
  background: #000000;
  border: 1px solid #00ff0a;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  text-align: center;

  &:focus {
    background: #000000;
    border: 1px solid #faff00;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 32px;
  }
`;
export const GoToInputEmpty = css`
  color: white;
  background: #000000;
  border: 1px solid #00ff0a;
  border-radius: 8px;
  text-align: center;

  &:focus {
    background: #000000;
    border: 1px solid #faff00;
  }
  :hover {
    background: #000000;
    border: 1px solid #faff00;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 22px;
  }
`;
export const Ntn = css`
  color: white;
  background: #000000;
  border: 1px solid #00ff0a;
  border-radius: 24px;
  text-align: center;
  margin: auto;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;
