import { css } from "@emotion/react";
import { Box, Image, Text, Input, Center } from "@chakra-ui/react";

const Details = [
  {
    h: "Fast Connection",
    b: "Use White Level Money Transfers Software Solutons",
  },
  {
    h: "Prosperity",
    b: "Successfully manage your Business Using new opportunities",
  },
  {
    h: "Scale Up",
    b: "Use ready made technological solutions and the expert experience of the team.",
  },
];

const OuterCont = css`
  width: 100%;
  margin-bottom: 0;
  color: #ffffff;

  @media (max-width: 800px) {
    margin-top: -20px;
  }
  @media (max-width: 480px) {
  }
`;
const Head = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 78px;
  color: #ffffff;
  text-align: center;
  margin-top: 110px;
  margin-bottom: 0;

  @media (max-width: 800px) {
    font-size: 40px;
    margin-top: 70px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
    margin-top: 10px;
  }
`;
const DivsCont = css`
  width: 88%;
  margin: auto;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 70px;
  }
  @media (max-width: 480px) {
    gap: 20px;
    margin-top: 40px;
  }
`;
const Cards = css`
  background: #000000;
  border: 1.03263px solid #00ff0a;
  border-radius: 24.7832px;
  width: 361.42px;
  height: 185.87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-align: center;

  :hover {
    border: 1.03263px solid #faff00;
  }

  @media (max-width: 1240px) {
    border-radius: 20.7832px;
    width: 232.42px;
    height: 178.87px;
  }
  @media (max-width: 800px) {
    border-radius: 24.7832px;
    width: 361.42px;
    height: 155.87px;
  }
  @media (max-width: 480px) {
    border-radius: 20.7832px;
    width: 232.42px;
    height: 158.87px;
  }
`;
const HeadCard = css`
  margin-top: 24.78px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 33.0443px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0;

  @media (max-width: 1240px) {
    font-size: 24.0443px;
    margin-top: 20.78px;
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    margin-top: 16.78px;
  }
`;
const BodyCard = css`
  margin-top: 17.07px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.5222px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  width: 85%;

  @media (max-width: 1240px) {
    font-size: 14.0443px;
    margin-top: 15.78px;
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    margin-top: 5.78px;
  }
`;

function WhyUs() {
  return (
    <Box css={OuterCont}>
      <Text css={Head}>Why US</Text>
      <Box css={DivsCont}>
        {Details.map((item, ind) => (
          <Box css={Cards} key={item.h}>
            <Text css={HeadCard}>{item.h}</Text>
            <Text css={BodyCard}>{item.b}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
export default WhyUs;
// #
