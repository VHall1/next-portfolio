import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/core";
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

interface footerProps {
  gitUrl: string;
  twitterUrl: string;
  linkedInUrl: string;
}

export const Footer: React.FC<footerProps> = ({
  gitUrl,
  twitterUrl,
  linkedInUrl,
}) => {
  return (
    <Box py={8} background="#805AD5" color="white">
      <Flex w="100%" maxW="1100px" mx="auto" direction="column">
        <Flex>
          <IconButton
            mr={2}
            aria-label="github"
            variantColor="purple"
            icon={FiGithub}
            onClick={() =>
              window.open(`https://github.com/${gitUrl}`, "_blank")
            }
          />
          <IconButton
            mr={2}
            aria-label="github"
            variantColor="purple"
            icon={FiTwitter}
            onClick={() =>
              window.open(`https://twitter.com/${twitterUrl}`, "_blank")
            }
          />
          <IconButton
            aria-label="github"
            variantColor="purple"
            icon={FiLinkedin}
            onClick={() =>
              window.open(
                `https://www.linkedin.com/in/${linkedInUrl}`,
                "_blank"
              )
            }
          />
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Made with 🤍 by Victor Hall</Text>
          <Link href="mailto:victorhallpsn@hotmail.com">
            <Flex alignItems="center">
              <Box mr={2}>
                <FiMail />
              </Box>
              victorhallpsn@hotmail.com
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
