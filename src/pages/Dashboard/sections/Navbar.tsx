import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryColor,
  primaryTextColor,
  secondaryColor,
} from "../../../utils/constant/theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
// import { BsFillSunFill } from "react-icons/bs";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <HStack
        height={"1.7cm"}
        paddingX={{ base: "10px", md: "40px" }}
        width={"100%"}
        maxW={"1440px"}
        backgroundColor={primaryColor()}
        backdropFilter={"blur(6.6px)"}
        justify={"space-between"}
        className="navbar"
        position={"fixed"}
        zIndex={"10"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        fontSize={"14px"}
      >
        <Image
          src="/assets/Logo.png"
          width={"40px"}
          objectFit={"contain"}
          loading="lazy"
        />

        <HStack gap={"30px"} display={{ base: "none", lg: "flex" }}>
          <HStack gap={"15px"}>
            <a href="#Carousel">
              <Text
                color={primaryTextColor()}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Beranda
              </Text>
            </a>

            <a href="#affiliate-creator">
              <Text
                color={primaryTextColor()}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Kreator
              </Text>
            </a>

            <a href="#affiliate-comunity">
              <Text
                color={primaryTextColor()}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Komunitas
              </Text>
            </a>
            <a href="#plan">
              <Text
                color={primaryTextColor()}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Plan
              </Text>
            </a>
          </HStack>

          <a href={"#join-comunity"}>
            <Button borderRadius={"50px"} colorScheme="blue">
              Gabung Sekarang
            </Button>
          </a>
        </HStack>

        <Button
          colorScheme="whiteAlpha"
          variant={"outline"}
          display={{ base: "flex", lg: "none" }}
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <GiHamburgerMenu />
        </Button>
      </HStack>

      <Stack
        transform={!showSidebar ? "translateX(100%)" : "translateX(0%)"}
        transition="all 0.5s"
        display={{ base: "flex", lg: "none" }}
        paddingX={{ base: "10px", lg: "40px" }}
        paddingY={"20px"}
        width={"100%"}
        height={"100vh"}
        maxW={"1440px"}
        backgroundColor={secondaryColor()}
        position={"fixed"}
        zIndex={"11"}
      >
        <HStack justifyContent={"space-between"}>
          <Image
            src="/assets/Logo.png"
            width={"40px"}
            objectFit={"contain"}
            loading="lazy"
          />
          <Button
            colorScheme="whiteAlpha"
            variant={"outline"}
            display={{ base: "flex", lg: "none" }}
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <IoMdClose />
          </Button>
        </HStack>

        <Stack gap={"10px"} my={"30px"}>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#Carousel";
            }}
          >
            Beranda
          </Button>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#affiliate-creator";
            }}
          >
            Kreator
          </Button>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#affiliate-comunity";
            }}
          >
            Komunitas
          </Button>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#plan";
            }}
          >
            Plan
          </Button>

          <Button
            colorScheme="blue"
            borderRadius={"50px"}
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#join-comunity";
            }}
          >
            Gabung Sekarang
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
