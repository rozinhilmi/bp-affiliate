import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Carousel = (props: { data: any }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HStack
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      minHeight={{ base: "85vh", lg: "700px" }}
      paddingY={"40px"}
      gap={"5px"}
      flexWrap={"wrap"}
      id="Carousel"
      paddingTop={"2.2cm"}
      bg={secondaryColor()}
      paddingX={{ base: "15px", lg: "30px" }}
      borderBottomRightRadius={"40%"}
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <Stack
        gap={"20px"}
        alignItems={{ base: "center", md: "start" }}
        justifyContent={"center"}
        width={{ base: "100%", md: "50%" }}
        data-aos="fade-down"
        // maxWidth={{ md: "500px" }}
        textAlign={{ base: "center", md: "start" }}
      >
        <Text
          zIndex={"2"}
          color={primaryTextColor()}
          as={"b"}
          fontSize={{ base: "3xl", md: "5xl" }}
          lineHeight={"1"}
          // textAlign={{ base: "center", lg: "start" }}
        >
          {props.data.title}
        </Text>
        <Text color={secondaryTextColor()}>{props.data.description}</Text>
      </Stack>

      <Image
        width={{ base: "80%", md: "40%" }}
        maxWidth={"400px"}
        objectFit={"contain"}
        src={`/assets/${props.data.gambar}`}
        loading="lazy"
        data-aos="fade-down"
      />
    </HStack>
  );
};

export default Carousel;
