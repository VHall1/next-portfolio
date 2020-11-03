import { Flex, Text } from "@chakra-ui/core";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Head from "next/head";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Victor Hall</title>
      </Head>
      <Fade delay={200}>
        <Flex
          id="funnel"
          className="funnel"
          direction="column"
          h="100vh"
          justifyContent="center"
        >
          <Text mx="auto" as="h1" fontSize="6xl">
            Hey, I'm Victor 👨‍💻
          </Text>
          <Text mt={8} mx="auto" as="h2" fontSize="2xl">
            I develop web applications using React and a bunch of other stuff.
          </Text>
          <Flex justifyContent="center" mt={10}>
            {/* <Link href="/blog">
              <div className="up">Blog</div>
            </Link> */}
            <Link href="/contact">
              <div className="up">Contact</div>
            </Link>
            <Link href="/portfolio">
              <div className="up">Portfolio</div>
            </Link>
          </Flex>
        </Flex>
      </Fade>
    </>
  );
};

export default Index;
