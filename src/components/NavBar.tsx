import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";

export const NavBar: React.FC<{}> = ({}) => {
  return (
    <Flex px={8} py={5} alignItems="center" borderWidth="1px">
      <NextLink href="/">
        <Flex alignItems="center" className="logo">
          <Avatar mr={3} size="sm" src="/me.jpeg" />
          <Text fontWeight={700} fontSize="xl">
            Victor Hall
          </Text>
        </Flex>
      </NextLink>
      <Box ml="auto">
        <NextLink href="/">
          <Link fontSize="xl" mr={6}>
            Home
          </Link>
        </NextLink>
        <NextLink href="/contact">
          <Link fontSize="xl">Contact</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
