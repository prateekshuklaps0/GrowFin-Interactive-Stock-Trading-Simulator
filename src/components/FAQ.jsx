import { css } from "@emotion/react";
import { Box, Image, Text, Input, Center } from "@chakra-ui/react";

export const OuterCont = css`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 0;
  margin-top: 50px;

  @media (max-width: 950px) {
    width: 90%;
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    width: 90%;
    margin-top: 5px;
    flex-direction: column;
    gap: 20px;
  }
`;
export const CardCss = css`
  text-align: center;

  @media (max-width: 950px) {
  }
  @media (max-width: 480px) {
  }
`;
export const HeadCss = css`
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  color: #ffffff;
  margin-bottom: 20px;

  @media (max-width: 951px) {
    font-size: 20px;
    margin-bottom: -15px;
  }
  @media (max-width: 480px) {
    color: #02ae09;
  }
`;
export const TextCss = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  margin-bottom: -20px;
  color: #ffffff;

  @media (max-width: 951px) {
    font-size: 13px;
    margin-bottom: -25px;
  }
  @media (max-width: 480px) {
  }
`;

const Data = [
  {
    heading: "Company",
    texts: [
      "About Us",
      "Grow Fin Blog",
      "Careers",
      "Awards And Recognition",
      "Contact Us",
    ],
  },

  {
    heading: "Need Help?",
    texts: [
      "Member Login",
      "Sign Up",
      "Made Connections",
      "How to use Grow Fin.com",
      "Premium Memberships",
      "Customer Support",
      "Site Map",
    ],
  },

  {
    heading: "Privacy & You",
    texts: [
      "Terms of Use",
      "Privacy Policy",
      "Be safe Online",
      "Report Misuse",
    ],
  },
];

function Cards({ Heading, Arr }) {
  return (
    <Box css={CardCss}>
      <Text css={HeadCss}>{Heading}</Text>
      {Arr.map((item, ind) => (
        <Text css={TextCss} key={item}>
          {item}
        </Text>
      ))}
    </Box>
  );
}

function FAQ() {
  return (
    <Box css={OuterCont}>
      {Data.map((item, ind) => (
        <Cards key={item.heading} Heading={item.heading} Arr={item.texts} />
      ))}
    </Box>
  );
}
export default FAQ;
