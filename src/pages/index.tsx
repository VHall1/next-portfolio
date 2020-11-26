import { Box, Flex, IconButton, Text } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import Portfolio from "../components/Portfolio";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { FiArrowUp } from "react-icons/fi";

let scrollPos = 0;

const Index: React.FC = () => {
  const [showNav, setShowNav] = useState(true);
  const [shouldDisplayBTT, setShouldDisplayBTT] = useState(false);

  const checkScrollPosition = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = scrollPos > currentScrollPos;

    setShowNav(visible);
    scrollPos = currentScrollPos;

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShouldDisplayBTT(true);
    } else {
      setShouldDisplayBTT(false);
    }
  };

  useEffect(() => {
    window.onscroll = checkScrollPosition;
    console.log("[Hysteresis] - Started logging");
  }, []);

  const handleAnchorScroll = (target: string) => {
    const element = document.querySelector(`#${target}`);
    element?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

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
              I'm a fullstack web developer and React enthusiast.
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
      <IconButton
        icon={FiArrowUp}
        aria-label="Back to the top"
        id="back-to-top"
        variantColor="blue"
        style={{ display: shouldDisplayBTT ? undefined : "none" }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </>
  );
};

export default Index;
