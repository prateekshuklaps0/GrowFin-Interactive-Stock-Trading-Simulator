import * as css from "../CssStyles/TestimonialsCss";
import Logo1 from "../Images/TestimonialsImg/Pic1.svg";
import Logo2 from "../Images/TestimonialsImg/Pic2.svg";
import Logo3 from "../Images/TestimonialsImg/Pic3.svg";
import LeftArrow from "../Images/TestimonialsImg/LeftArrow.svg";
import RightArrow from "../Images/TestimonialsImg/RightArrow.svg";
import { Box, Image, Text, Input, Center } from "@chakra-ui/react";

const TextData = [
  "I've been with this brokerage for over two years now and I've been consistently impressed with their level of service. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure that my investments are performing well.",
  "I've been using this brokerage for the past two years, this is the only platform which helps to directly connect with INVESTORS and FUND RAISERS. They took the time to understand my financial goals and risk tolerance, and created a tailored investment plan that has yielded impressive returns. I appreciate their transparency and communication throughout the process and I wouldn't hesitate to recommend them to anyone looking for a top-notch financial partner.",
  "I've worked with several brokerages over the years, but this one stands out for their personalized approach and attention to detail. Their team truly cares about their clients' financial success, and they've been able to help me achieve my goals in a way that other firms couldn't.",
];

function CommonCards({ Img, text, Pos }) {
  return (
    <Box css={css.SideCards}>
      <Image css={css.SideImg} src={Img} alt={Pos} />
      <Text css={css.SideText}>{text}</Text>
    </Box>
  );
}

function Testimonials() {
  return (
    <Box css={css.OuterCont}>
      <Text css={css.Head}>Testimonials</Text>
      <Box css={css.InnerCont}>
        <Box css={css.Container}>
          <Image css={css.LeftArrow} src={LeftArrow} alt="Previous" />
          <Box css={css.CardsCont}>
            <CommonCards Img={Logo1} text={TextData[0]} Pos="First" />
            <Box css={css.MiddleCard}>
              <Image css={css.MiddleImg} src={Logo2} alt="Middle" />
              <Text css={css.MiddleText}>{TextData[1]}</Text>
            </Box>
            <CommonCards Img={Logo3} text={TextData[2]} Pos="Third" />
          </Box>
          <Image css={css.RightArrow} src={RightArrow} alt="Next" />
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
