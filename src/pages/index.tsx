import { Box, Button, Flex, Grid, Heading } from "@chakra-ui/core";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { Footer } from "../components/Footer";
import { GitHub, GitHubProps } from "../components/GitHub";
import { NavBar } from "../components/NavBar";
import { fetchRepos } from "../utils/fetchGitRepos";

interface indexProps {
  posts: GitHubProps[];
  gitUrl: string;
  twitterUrl: string;
  linkedInUrl: string;
}

const Index: React.FC<indexProps> = ({
  posts,
  gitUrl,
  twitterUrl,
  linkedInUrl,
}) => {
  return (
    <>
      <NavBar />
      <Flex
        direction="column"
        alignItems="center"
        mx="auto"
        maxW="1600px"
        w="100%"
        p={12}
      >
        <Heading mr="auto">GitHub Projects</Heading>
        <Flex mb={8} mt={4}>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {posts.map(({ name, description, stars, language, link }, i) => (
              <GitHub
                name={name}
                description={description}
                stars={stars}
                language={language}
                link={link}
                key={i}
              />
            ))}
          </Grid>
        </Flex>
        <Button
          variantColor="purple"
          onClick={() => window.open(`https://github.com/${gitUrl}`, "_blank")}
        >
          <Box mr={2}>
            <FiGithub />
          </Box>
          Other Projects
        </Button>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        mx="auto"
        maxW="1600px"
        w="100%"
        p={12}
      >
        <Heading mr="auto">GitHub Projects</Heading>
        <Flex mb={8} mt={4}>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {posts.map(({ name, description, stars, language, link }, i) => (
              <GitHub
                name={name}
                description={description}
                stars={stars}
                language={language}
                link={link}
                key={i}
              />
            ))}
          </Grid>
        </Flex>
        <Button
          variantColor="purple"
          onClick={() => window.open(`https://github.com/${userUrl}`, "_blank")}
        >
          <Box mr={2}>
            <FiGithub />
          </Box>
          Other Projects
        </Button>
      </Flex>
      <Footer
        gitUrl={gitUrl}
        twitterUrl={twitterUrl}
        linkedInUrl={linkedInUrl}
      />
    </>
  );
};

export async function getStaticProps() {
  const gitUrl = process.env.USER_GIT!;
  const twitterUrl = process.env.USER_TWITTER!;
  const linkedInUrl = process.env.USER_LINKED_IN!;
  const posts = await fetchRepos(gitUrl);

  return {
    props: {
      posts,
      gitUrl,
      twitterUrl,
      linkedInUrl,
    },
  };
}

export default Index;
