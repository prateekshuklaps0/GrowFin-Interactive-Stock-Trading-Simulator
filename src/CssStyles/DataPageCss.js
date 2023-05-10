import { css } from "@emotion/react";
// #FAFF00; - yellow
// #ffffff; - white
// 00ff0a - green

// Sort and Filter Data
export const FilterAndSortCont = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 480px) {
  }
`;
export const FilterAndSortContB = css`
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 18px;
  }
  @media (max-width: 480px) {
    gap: 11px;
  }
`;
export const FilterAndSortContC = css`
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 800px) {
    display: flex;
  }
  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;
