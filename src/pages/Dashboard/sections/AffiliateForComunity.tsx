import { Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AffiliateForComunity = (props: { data: any }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      minHeight={{ base: "85vh", lg: "700px" }}
      // bg={secondaryColor()}
      margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      id="affiliate-comunity"
      gap={"30px"}
      justifyContent={{ base: "center", lg: "space-around" }}
      alignItems={"center"}
      flexDirection={{ base: "column", lg: "row" }}
      data-aos="zoom-in-left"
    >
      <Image
        src="/assets/affiliate-for-creator.png"
        width={{ base: "60%", md: "40%" }}
      />
      <Stack
        alignItems={{ base: "center", md: "flex" }}
        textAlign={{ base: "center", md: "start" }}
        gap={"20px"}
        width={{ base: "90%", md: "40%" }}
      >
        <Text
          as={"b"}
          fontSize={{ base: "2xl", lg: "5xl" }}
          color={primaryTextColor()}
          lineHeight={"1"}
        >
          {props.data.title}
        </Text>
        <Text color={secondaryTextColor()}>{props.data.description}</Text>
      </Stack>
    </Stack>
  );
};

export default AffiliateForComunity;
