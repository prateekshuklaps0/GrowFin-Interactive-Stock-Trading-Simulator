import { css } from "@emotion/react";
// #FAFF00; - yellow
// #ffffff; - white
// 00ff0a - green

export const ActiveOuterBox = css`
  box-sizing: border-box;
  display: flex;
  align_items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;
export const TriggerBtn = css`
  color: white;
  background: #000000;
  border: 1px solid #00ff0a;
  border-radius: 8px;
  text-align: center;
  margin: auto;
  cursor: pointer;

  :hover {
    border: 1px solid #faff00;
    background: #000000;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    border-radius: 5px;
    height: 35px;
  }
`;
export const TriggerBtnText = css`
  color: #faff00;
  font-family: Inter;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;
export const TriggerBtnNormalText = css`
  color: #ffffff;
  font-family: Inter;
  margin: 5px 10px 5px 10px;
  font-size: 18px;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    margin: 2.5px 5px 2.5px 5px;
    font-size: 14px;
  }
`;
export const SortHeading = css`
  font-family: K2D;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;
export const ActiveSortOption = css`
  font-family: K2D;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  font-size: 22px;
  background-color: #c6f6d5;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;

export const InActiveSortOption = css`
  font-family: K2D;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  background-color: #fefcbf;

  :hover {
    background-color: #faf089;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;
export const ClearBtn = css`
  font-family: K2D;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  background-color: #805ad5;

  :hover {
    background-color: #9f7aea;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;
export const TabCont = css`
  display: flex;
  align-items: center;
  margin-left: 10px;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    margin-left: 0px;
  }
`;
export const ActiveTabBtn = css`
  font-family: K2D;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  font-size: 17px;
  border: 1px solid #00ff0a;
  color: white;
  height: 40px;

  :hover {
    border: 1px solid #faff00;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 16px;
    height: 30px;
  }
`;
export const InActiveTabBtn = css`
  font-family: K2D;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;

  :hover {
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 16px;
    height: 30px;
  }
`;
