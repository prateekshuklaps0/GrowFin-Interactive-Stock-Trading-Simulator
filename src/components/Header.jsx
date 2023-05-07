import * as css from "../CssStyles/HeaderCss";
import Logo from "../Images/Header/Logo.svg";
import { useState } from "react";
import { Box, Image, Text, Input } from "@chakra-ui/react";

function HeadInput() {
  return (
    <Box css={css.InputOuterCont}>
      <Box css={css.InputCont}>
        <Box css={css.Cards}>
          <Text css={css.CardText}>What do people call you</Text>
          <Input css={css.InputCss} placeholder="Name" />
        </Box>

        <Box css={css.Cards}>
          <Text css={css.CardText}>Mail Id</Text>
          <Input css={css.InputCss} placeholder="xxxxxxxxxx@gmail.com" />
        </Box>

        <Box css={css.Cards}>
          <Text css={css.CardText}>What might you be?</Text>
          <Input css={css.InputCss} placeholder="Entrepreneurs" />
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <Box css={css.OuterCont}>
      <Image css={css.Logo} src={Logo} alt="HeaderLogo" />
      <Text css={css.Heading}>Welcome to Grow Fin</Text>
      <Text css={css.Heading2}>“Your money our expertise”</Text>
      <Box css={css.TextCont}>
        <Text css={css.Texting}>
          We understand that raising capital can be one of the most challenging
          aspects of launching or growing a business. that’s why we’re here to
          help entrepreneurs navigate the investment landscape with confidence
          and ease.
        </Text>
      </Box>

      <HeadInput />
    </Box>
  );
}
export default Header;
