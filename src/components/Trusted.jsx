import { css } from "@emotion/react";
import Logo1 from "../Images/TrustedImg/Logo1.svg";
import Logo2 from "../Images/TrustedImg/Logo2.svg";
import Logo3 from "../Images/TrustedImg/Logo3.svg";
import { Box, Image, Text, Input, Center } from "@chakra-ui/react";

export const OuterCont = css`
  margin-top: 140px;
  width: 100%;
  text-align: center;
  margin-bottom: 0;

  @media (max-width: 800px) {
    margin-top: 110px;
  }
  @media (max-width: 480px) {
    margin-top: 60px;
  }
`;
export const Head = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 78px;
  color: #ffffff;
  margin-bottom: 80px;

  @media (max-width: 800px) {
    font-size: 45px;
    margin-bottom: 40px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
export const CardCont = css`
  background: #000000;
  border: 1px solid rgba(0, 255, 10, 0.5);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;

  @media (max-width: 800px) {
    flex-direction: column;

    padding-top: 20px;
    padding-bottom: 20px;
    gap: 20px;
  }
  @media (max-width: 480px) {
    padding-top: 15px;
    padding-bottom: 15px;
    gap: 15px;
  }
`;
export const Card = css`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    width: 320px;
  }
  @media (max-width: 480px) {
  }
`;
export const ImgCont = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, #00c407 33.12%, #000000 100%);
  opacity: 0.8;
  border: 1px solid #00ff0a;
  margin-right: 24px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ImgCss = css`
  width: 60px;
  height: 60px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CardText = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #ffffff;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

const Data = [
  { IMG: Logo1, TXT: "Easy Connections" },
  { IMG: Logo2, TXT: "Verified Profiles" },
  { IMG: Logo3, TXT: "100 % Privacy" },
];

function Cards({ IMG, TXT }) {
  return (
    <Box css={Card}>
      <Center css={ImgCont}>
        <Image css={ImgCss} src={IMG} alt={TXT} />
      </Center>
      <Text css={CardText}>{TXT}</Text>
    </Box>
  );
}

function Trusted() {
  return (
    <Box css={OuterCont}>
      <Text css={Head}>Trusted By Millions</Text>
      <Box css={CardCont}>
        {Data.map((item, ind) => (
          <Cards key={item.TXT} IMG={item.IMG} TXT={item.TXT} />
        ))}
      </Box>
    </Box>
  );
}
export default Trusted;
