import { Stack } from "@chakra-ui/react";
import { primaryColor } from "../../utils/constant/theme";
import Navbar from "./sections/Navbar";
import Carousel from "./sections/Carousel";
import Target from "./sections/Target";
import AffiliateForComunity from "./sections/AffiliateForComunity";
import AffiliateForCreator from "./sections/AffiliateForCreator";
import AffiliatePlans from "./sections/AffiliatePlans";
import JoinAffiliate from "./sections/JoinAffiliate";
import Footer from "./sections/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Benefits from "./sections/Benefeits";

const page = () => {
  const [data, setData]: any = useState();
  const getData = async () => {
    await axios.get(`database.json`).then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Affiliate | BP Gamestore</title>
        <meta name="description" content="description example" />
        <meta name="keywords" content="example keywords" />
      </Helmet>
      <Stack
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={primaryColor()}
      >
        {data ? (
          <Stack
            width={"100%"}
            maxWidth={"1440px"}
            backgroundColor={primaryColor()}
            position={"relative"}
            overflowX={"hidden"}
            // minHeight={"80vh"}
          >
            <Navbar />
            <Carousel data={data.carousel_content} />
            <Target data={data.target} />
            <AffiliateForCreator data={data.kreator} />
            <AffiliateForComunity data={data.komunitas} />

            <AffiliatePlans data={data.plan} />
            <Benefits data={data.benefits} />
            <JoinAffiliate data={data.join_affiliate} />
            <Footer />
          </Stack>
        ) : null}
      </Stack>
    </>
  );
};

export default page;
