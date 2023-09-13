import { Button, Image, Stack, TabIndicator, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const JoinAffiliate = (props: { data: any }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      bg={secondaryColor()}
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

      <Tabs align="center" variant="unstyled">
        <TabList justifyContent={"center"} color={primaryTextColor()} as={"b"}>
          <Tab color={primaryTextColor()} as={"b"} cursor={"pointer"}>
            Kreator
          </Tab>
          <Tab color={primaryTextColor()} as={"b"} cursor={"pointer"}>
            Komunitas
          </Tab>
        </TabList>
        <TabIndicator
          justifyContent={"center"}
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels color={secondaryTextColor()} width={"100%"}>
          <TabPanel>
            <Stack
              alignSelf={"center"}
              gap={"30px"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={{ base: "column", md: "row" }}
              flexWrap={"wrap"}
              my={"30px"}
            >
              {props.data.kreator.map((item: any, index: number) => (
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
          </TabPanel>
          <TabPanel>
            <Stack
              alignSelf={"center"}
              gap={"30px"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={{ base: "column", md: "row" }}
              flexWrap={"wrap"}
              my={"30px"}
            >
              {props.data.komunitas.map((item: any, index: number) => (
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
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Link
        to={props.data.link_form}
        target="_blank"
        style={{ alignSelf: "center" }}
      >
        <Button
          width={"100%"}
          colorScheme="blue"
          borderRadius={"50px"}
          size={"lg"}
        >
          Gabung Sekarang
        </Button>
      </Link>
    </Stack>
  );
};

export default JoinAffiliate;
