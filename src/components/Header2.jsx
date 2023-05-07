import * as css from "../CssStyles/Header2Css";
import SignUpLogo from "../Images/Header2Img/SignUp.svg";
import ConnectLogo from "../Images/Header2Img/Connect.svg";
import InteractLogo from "../Images/Header2Img/Interact.svg";
import { useState, useEffect } from "react";
import { Box, Image, Text, Input, Center } from "@chakra-ui/react";

function Header2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const CardsData = [
    {
      img: SignUpLogo,
      heading: "Sign up",
      text: "Sign up for free and update your portfolio",
    },
    {
      img: ConnectLogo,
      heading: "Connect",
      text: "Select and connect with entrepreneurs or investors",
    },
    {
      img: InteractLogo,
      heading: "Interact",
      text: "Become a premium member and start a conversation",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % CardsData.length);
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box css={css.OuterCont}>
      <Text css={css.Head}>How To Invest Or Scale UP</Text>

      <Box css={css.ChildCont}>
        {CardsData.map((item, ind) => (
          <Box
            css={ind == activeIndex ? css.ActiveCardCont : css.InActiveCardCont}
            key={ind}
          >
            <Center css={ind == activeIndex ? css.ActiveBox : css.InActiveBox}>
              <Image
                css={ind == activeIndex ? css.ActiveImg : css.InActiveImg}
                src={item.img}
                alt={item.heading}
              />
            </Center>
            <Text css={ind == activeIndex ? css.ActiveHead : css.InActiveHead}>
              {item.heading}
            </Text>
            <Text css={ind == activeIndex ? css.ActiveText : css.InActiveText}>
              {item.text}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
export default Header2;
