import { Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Benefits = (props: { data: any }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      // bg={secondaryColor()}
      margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      id="join-comunity"
      gap={"60px"}
      minHeight={{ base: "85vh", lg: "700px" }}
      justifyContent={"center"}
      data-aos="fade-top"
      // justifyContent={"space-around"}
      // alignItems={"center"}
      // flexDirection={{ base: "column", lg: "row" }}
    >
      <Text
        as={"b"}
        fontSize={{ base: "2xl", lg: "5xl" }}
        color={primaryTextColor()}
        alignSelf={"center"}
        textAlign={"center"}
        // lineHeight={"0.8"}
      >
        {props.data.title}
      </Text>

      <Stack
        alignSelf={"center"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        my={"30px"}
      >
        {props.data.data.map((item: any, index: number) => (
          <Stack
            width={"300px"}
            alignItems={"center"}
            textAlign={"center"}
            key={index}
          >
            <Image
              width={"122px"}
              src={`/assets/${item.gambar}`}
              data-aos="flip-left"
            />
            <Text as={"b"} color={primaryTextColor()} lineHeight={"0.8"}>
              {item.title}
            </Text>
            <Text color={secondaryTextColor()}>{item.description}</Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Benefits;
