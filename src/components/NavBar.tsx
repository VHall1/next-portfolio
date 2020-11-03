import { Avatar, Box, Flex, Text } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";

export const NavBar: React.FC = () => {
  return (
    <Box borderWidth="1px" className="navbar">
      <Flex w="100%" maxW="1180px" mx="auto" px={8} py={6} alignItems="center">
        <NextLink href="/">
          <Flex alignItems="center" className="logo">
            <Avatar mr={3} size="sm" src="/me.jpeg" />
            <Text fontWeight={700} fontSize="xl">
              Victor Hall
            </Text>
          </Flex>
        </NextLink>
        <Flex ml="auto" alignItems="center">
          <NextLink href="/">
            <Box className="css-custom-link" mr={6}>
              Home
            </Box>
          </NextLink>
          {/* <NextLink href="/blog">
            <Box className="css-custom-link" mr={6}>
              Blog
            </Box>
          </NextLink> */}
          <NextLink href="/contact">
            <Box className="css-custom-link" mr={6}>
              Contact
            </Box>
          </NextLink>
          <NextLink href="/portfolio">
            <Box className="css-round-link">Portfolio</Box>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};
