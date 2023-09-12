import { Image, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
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
      <Stack alignItems={"flex-start"} textAlign={"start"} gap={"20px"}>
        <Text
          as={"b"}
          fontSize={{ base: "2xl", lg: "5xl" }}
          color={primaryTextColor()}
          lineHeight={"0.8"}
        >
          {props.data.title}
        </Text>
        <UnorderedList>
          {props.data.list.map((item: string, index: number) => (
            <ListItem color={secondaryTextColor()} key={index}>
              {item}
            </ListItem>
          ))}
        </UnorderedList>
      </Stack>
    </Stack>
  );
};

export default AffiliateForComunity;
