import { Button, Divider, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
} from "../../../utils/constant/theme";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Stack
      padding={{ base: "20px", lg: "30px" }}
      paddingY={"30px"}
      bg={secondaryColor()}
      borderRadius={"12px"}
      alignItems={"center"}
    >
      <HStack
        flexDirection={{ base: "column", lg: "row" }}
        my={"30px"}
        width={{ base: "80%", lg: "500px" }}
        gap={"30px"}
      >
        <Stack>
          <Image
            src="/assets/Logo.png"
            width={"40px"}
            objectFit={"contain"}
            loading="lazy"
          />
          <Text color={primaryTextColor()}>
            Supplier of top up games & vouchers best selling, cheap, safe legal
            100% with the most complete payment in Indonesia{" "}
          </Text>
        </Stack>

        <HStack>
          <Button>
            <BsFacebook />
          </Button>
          <Button>
            <AiFillInstagram />
          </Button>
          <Button>
            <BsTwitter />
          </Button>
        </HStack>
      </HStack>

      <Divider />
      <Text color={primaryTextColor()} alignSelf={"center"}>
        © 2023 BP Game Store. All rights reserved.{" "}
      </Text>
    </Stack>
  );
};

export default Footer;
