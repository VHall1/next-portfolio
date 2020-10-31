import { Text, Flex, Box } from "@chakra-ui/core";
import React from "react";
import { FiBook, FiStar } from "react-icons/fi";
import { RepoLanguage } from "./RepoLanguage";

interface GitHubProps {
  name: string;
  description?: string;
  language: "JavaScript" | "TypeScript";
  stars: number;
}

export const GitHub: React.FC<GitHubProps> = ({
  name,
  description,
  language,
  stars,
}) => {
  return (
    <Flex direction="column" p={8} className="github-card">
      <Flex alignItems="center">
        <Box mt={1}>
          <FiBook size={20} />
        </Box>
        <Text fontSize={25} ml={1}>
          {name}
        </Text>
      </Flex>
      <Text fontSize={19} my={5}>
        {description}
      </Text>
      <Flex fontSize={13} mt="auto" my={3} alignItems="center">
        <RepoLanguage
          color={language === "TypeScript" ? "#2B7489" : undefined}
        />
        <Text ml={2}>{language}</Text>
        <Flex ml={4} alignItems="center">
          <FiStar />
          <Text ml={2}>{stars}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
