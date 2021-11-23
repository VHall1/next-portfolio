import { Box, Flex, Text } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import Portfolio from "../components/Portfolio";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { NextPage } from "next";

const Index: NextPage = () => {
  const [showNav, setShowNav] = useState(true);

  const handleAnchorScroll = (target: string) => {
    const element = document.querySelector(`#${target}`);
    element?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  let scrollPos = 0;
  const checkScrollPosition = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = scrollPos > currentScrollPos;

    setShowNav(visible);
    scrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.onscroll = checkScrollPosition;
    console.log("[Hysteresis] - Started logging");
  }, []);

  return (
    <>
      <Head>
        <title>Victor Hall</title>
      </Head>
      <NavBar hidden={!showNav} handleScroll={handleAnchorScroll} />
      <Box>
        <Fade delay={200} triggerOnce={false}>
          <Flex
            id="funnel"
            className="funnel"
            direction="column"
            h="100vh"
            justifyContent="center"
          >
            <Text mx="auto" as="h1">
              Hey, I'm Victor 👨‍💻
            </Text>
            <Text mt={8} mx="auto" as="h2">
              I'm a Fullstack Web Developer and a React enthusiast.
            </Text>
            <Flex justifyContent="center" mt={10}>
              <div
                className="up"
                onClick={() => handleAnchorScroll("portfolio")}
              >
                Projects
              </div>
            </Flex>
          </Flex>
        </Fade>
        <Portfolio />
      </Box>
      <Footer />
    </>
  );
};

export default Index;
