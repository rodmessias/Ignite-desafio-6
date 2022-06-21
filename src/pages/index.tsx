import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Separator from "../components/Separator";
import ServicesProps from "../components/ServicesProps";
import Sliders from "../components/Sliders";

export default function Home() {
  return (
    <Flex direction={'column'}>
      <Header />
      <Banner />
      <ServicesProps />
      <Separator />

      <Heading
        textAlign={'center'}
        fontWeight={'500'}
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Sliders />

    </Flex>
  );
}
