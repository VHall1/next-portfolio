import { Box, Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";

export const NavBar: React.FC<{}> = ({}) => {
  return (
    <Flex p={4} borderWidth="1px">
      <Box className="logo">{"<Victor Hall />"}</Box>
      <Box ml="auto">
        <NextLink href="/">
          <Link mr={4}>Home</Link>
        </NextLink>
        <NextLink href="/contact">
          <Link>Contact</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
