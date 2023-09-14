import { Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AffiliateForCreator = (props: { data: any }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      minHeight={{ base: "85vh", lg: "700px" }}
      paddingY={"30px"}
      bg={secondaryColor()}
      margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      id="affiliate-creator"
      gap={"30px"}
      justifyContent={{ base: "center", lg: "space-around" }}
      alignItems={"center"}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Stack
        alignItems={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "start" }}
        gap={"20px"}
        width={{ base: "90%", md: "40%" }}
        data-aos="zoom-in-right"
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
      <Image
        data-aos="zoom-in-left"
        src={`/assets/${props.data.gambar}`}
        width={{ base: "80%", md: "40%" }}
        maxWidth={"400px"}
      />
    </Stack>
  );
};

export default AffiliateForCreator;
