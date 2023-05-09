import { css } from "@emotion/react";
// #FAFF00; - yellow
// #ffffff; - white

export const Outer = css`
  color: white;
  margin: auto;
  width: 80%;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    width: 92%;
  }
`;
export const EditSaveCont = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const EditCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    margin-right: 8px;
    width: 130px;
  }
`;
export const SaveCloseBtn = css`
  width: 80px;
  color: white;
  background: #000000;
  border: 1px solid #00ff0a;
  border-radius: 8px;
  padding-bottom: 4px;
  height: 35px;

  :hover {
    color: white;
    background: #000000;
    border: 1px solid #faff00;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    height: 25px;
    width: 60px;
    border-radius: 4px;
    font-size:13px
    padding-bottom: 4px;
  }
`;
export const EditIcon = css`
  cursor: pointer;

  :hover {
    color: #faff00;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    margin-right: 10px;
  }
`;
export const UserAccountCont = css`
  background: #000000;
  border: 1px solid #00ff0a;
  border-radius: 16px;

  overflow: hidden;
  padding: 20px 40px 15px 40px;

  :hover {
    border: 1px solid #faff00;
  }

  @media (max-width: 1000px) {
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    padding: 0px 0px 0px 0px;
    border-radius: 10px;
  }
`;
export const UserAccountProgress = css`
  width: 98%;
  margin: auto;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  @media (max-width: 1000px) {
    width: 97%;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    width: 93%;
  }
`;
export const FirstAndLastNameCont = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    gap: -30px;
  }
`;
export const FirstNameCont = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;

  @media (max-width: 1000px) {
    width: 47%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
    margin-bottom: -30px;
  }
`;
export const FirstNameHead = css`
  font-family: "K2D";
  width: 160px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 78px;
  color: #ffffff;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    font-size: 14px;
    width: 140px;
  }
`;
export const FirstNameInp = css`
  background: #000000;
  border: 0.5px solid #00ff0a;
  border-radius: 6px;
  height: 35px;
  text-align: center;
  color: white;
  align-items: center;

  :hover {
    border: 0.5px solid #faff00;
  }

  :focus {
    border: 0.5px solid #faff00;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    height: 30px;
    font-size: 15px;
  }
`;
export const LastNameCont = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;

  @media (max-width: 1000px) {
    width: 47%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
    margin-bottom: -30px;
  }
`;
export const LastNameHead = css`
  font-family: "K2D";
  width: 160px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 78px;
  color: #ffffff;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    font-size: 14px;
    width: 140px;
  }
`;
export const LastNameInp = css`
  background: #000000;
  border: 0.5px solid #00ff0a;
  border-radius: 6px;
  height: 35px;
  text-align: center;
  color: white;
  align-items: center;

  :hover {
    border: 0.5px solid #faff00;
  }

  :focus {
    border: 0.5px solid #faff00;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    height: 30px;
    font-size: 15px;
  }
`;
export const EmailInp = css`
  background: #000000;
  border: 0.5px solid #00ff0a;
  border-radius: 6px;
  height: 35px;
  text-align: center;
  color: white;
  align-items: center;

  :hover {
    border: 0.5px solid #faff00;
  }

  :focus {
    border: 0.5px solid #faff00;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const MobileInputGroup = css`
  background: #000000;
  border: 0.5px solid #00ff0a;
  border-radius: 6px;
  height: 35px;
  text-align: center;
  color: white;
  align-items: center;

  :hover {
    border: 0.5px solid #faff00;
  }

  :focus {
    border: 0.5px solid #faff00;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    height: 30px;
    font-size: 15px;
  }
`;
export const MobileCountryCode = css`
  background: #000000;
  border: 0.5px solid #00ff0a;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  height: 35px;
  text-align: center;
  color: white;
  align-items: center;

  :focus {
    border: 0.5px solid #faff00;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    height: 30px;
    font-size: 15px;
  }
`;
export const MobileInp = css`
  background: #000000;
  border: 0.5px solid #00ff0a;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  height: 35px;
  text-align: center;
  color: white;
  align-items: center;

  :hover {
    border: 0.5px solid #faff00;
  }

  :focus {
    border: 0.5px solid #faff00;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    height: 30px;
    font-size: 15px;
  }
`;
export const AccountTypeCont = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  margin: auto;

  @media (max-width: 1000px) {
    width: 47%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;
export const AccountTypeHead = css`
  font-family: "K2D";
  width: 210px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 78px;
  color: #ffffff;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    width: 180px;
    font-size: 14px;
  }
`;
export const AccountTypeSelect = css`
  background: #000000;
  border: 0.5px solid #00ff0a;
  border-radius: 6px;
  height: 35px;
  text-align: center;
  color: white;
  align-items: center;

  :hover {
    border: 0.5px solid #faff00;
  }

  :focus {
    border: 0.5px solid #faff00;
  }

  @media (max-width: 1000px) {
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    height: 30px;
    font-size: 15px;
  }
`;

// Statistics Css

export const StatisticHead = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;
  color: #ffffff;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 630px) {
    margin-top: 30px;
    font-size: 30px;
  }
  @media (max-width: 480px) {
    margin-top: 20px;
    font-size: 24px;
  }
`;
export const BalanceAndFundCont = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 35px;

  @media (max-width: 630px) {
    margin-top: 30px;
    justify-content: space-between;
    width: 420px;
  }
  @media (max-width: 480px) {
    margin-top: 20px;
    justify-content: space-between;
    width: 300px;
  }
`;
export const BalanceCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1.03263px solid #00ff0a;
  border-radius: 5.7832px;
  height: 35px;
  padding: 10px 20px 10px 20px;
  @media (max-width: 630px) {
    padding: 5px 10px 5px 10px;
    //padding: 0px;
  }
  @media (max-width: 480px) {
    padding: 3px 5px 3px 5px;
    height: 30px;
  }
`;
export const BalanceText = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 47px;
  color: #ffffff;
  margin-right: 30px;

  @media (max-width: 630px) {
    margin-right: 10px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    margin-right: 8px;
    font-size: 12px;
  }
`;
export const BalanceValue = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 47px;
  color: #faff00;

  @media (max-width: 630px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const HoldingText = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 47px;
  color: #ffffff;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 630px) {
    font-size: 28px;
    margin-top: 30px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 12px;
  }
`;
export const HoldingCont = css`
  display: flex;
  align-item: center;
  justify-content: space-around;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;
export const StocksText = css`
  color: #faff00;
  font-family: "K2D";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 47px;
  text-align: center;

  @media (max-width: 630px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// BookMarks Css

export const BookMarksOuterCont = css`
  margin-top: 80px;
  width: 100%;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const BookMarkText = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 400;
  margin: auto;
  display: flex;
  align-items: center;
  width: 220px;
  justify-content: space-between;
  text-align: center;
  font-size: 32px;
  line-height: 62px;
  color: #ffffff;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const BookMarkTextIcon = css`
  font-size: 32px;
  color: #ffffff;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
