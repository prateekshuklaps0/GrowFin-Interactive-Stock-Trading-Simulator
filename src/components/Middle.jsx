import * as css from "../CssStyles/MiddleCss";
import Logo from "../Images/MiddleImg/Middle.svg";
import { useState, useEffect } from "react";
import { Box, Image, Text, Input, Center } from "@chakra-ui/react";

const Details = [
  { t1: "Technological and Initiative money Transfer platforms" },
  { t1: "Connecting to the Network or Participants" },
  { t1: "Compliance and financial Accounting Solutions" },
];

function Middle() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Details.length);
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box css={css.OuterCont}>
      <Text css={css.Heading}>The Service Which We Provide</Text>
      <Text css={css.SubHead}>
        our solutions for connecting to a global network of participants with
        which your customers can instantly send and receive or transfer money
        almost any where in the world
      </Text>
      <Box css={css.ContentCont}>
        <Box css={css.ChangableDivsCont}>
          {Details.map((item, ind) => (
            <Center css={css.CardsCss} key={ind + item.t1[2]}>
              <Text css={ind == activeIndex ? css.ACardsText : css.ICardsText}>
                {item.t1}
              </Text>
            </Center>
          ))}
        </Box>
        <Image
          src={Logo}
          alt="The Service Which We Provide"
          css={css.MiddleImg}
        />
      </Box>
    </Box>
  );
}

export default Middle;
