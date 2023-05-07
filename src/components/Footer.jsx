import * as css from "../CssStyles/Footer";
import FbLogo from "../Images/FooterImg/FbLogo.svg";
import TwitterLogo from "../Images/FooterImg/TwitterLogo.svg";
import InstaLogo from "../Images/FooterImg/InstaLogo.svg";
import { Box, Image, Text, Input, Center, Button } from "@chakra-ui/react";

function Footer() {
  return (
    <Box css={css.Outer}>
      <Box css={css.Upper}>
        <Box css={css.UpperLeft}>
          <Text css={css.UpperText}>Home</Text>
          <Text css={css.UpperText}>Category</Text>
          <Text css={css.UpperText}>Testemonials</Text>
          <Text css={css.UpperText}>About us</Text>
        </Box>
        <Box css={css.ContLogo}>
          <Image css={css.Logos} src={FbLogo} alt="FaceBook" />
          <Image css={css.Logos} src={TwitterLogo} alt="Twitter" />
          <Image css={css.Logos} src={InstaLogo} alt="Instagram" />
        </Box>
      </Box>

      <Box css={css.Divider}></Box>

      <Box css={css.LowerCont}>
        <Text css={css.LowerLeft}>
          copyright Event Partners. All right reserved
        </Text>
        <Text css={css.LowerRight}>Privacy Policy | Support</Text>
      </Box>
    </Box>
  );
}
export default Footer;
