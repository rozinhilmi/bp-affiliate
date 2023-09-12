import { Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Target = (props: { data: any }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Stack
      minHeight={{ base: "85vh", lg: "700px" }}
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      // bg={secondaryColor()}
      margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      id="Benefit2"
      // gap={"30px"}
      gap={{ base: "0", lg: "30px" }}
      justifyContent={{ base: "center", lg: "space-around" }}
      alignItems={"center"}
      flexDirection={{ base: "column", lg: "row" }}
      textAlign={{ base: "center", lg: "start" }}
    >
      <Stack width={"300px"} data-aos="fade-right">
        <Text
          as={"b"}
          fontSize={{ base: "3xl", md: "5xl" }}
          color={primaryTextColor()}
          lineHeight={"1"}
        >
          {props.data.data[0].title}
        </Text>
        <Text color={secondaryTextColor()}>
          {props.data.data[0].description}
        </Text>
      </Stack>
      <Image
        src={`/assets/${props.data.gambar}`}
        width={{ base: "60%", md: "40%" }}
        maxHeight={"700px"}
        data-aos="fade-up"
      />
      <Stack width={"300px"} data-aos="fade-left">
        <Text
          as={"b"}
          fontSize={{ base: "3xl", md: "5xl" }}
          color={primaryTextColor()}
          lineHeight={"1"}
        >
          {props.data.data[1].title}
        </Text>
        <Text color={secondaryTextColor()}>
          {props.data.data[1].description}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Target;
