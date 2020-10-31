import { Box, Button, Flex, Grid, Heading } from "@chakra-ui/core";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { GitHub, GitHubProps } from "../components/GitHub";
import { NavBar } from "../components/NavBar";
import { fetchRepos } from "../utils/fetchGitRepos";

interface indexProps {
  posts: GitHubProps[];
  userUrl: string;
}

const Index: React.FC<indexProps> = ({ posts, userUrl }) => {
  return (
    <>
      <NavBar />
      <Flex
        direction="column"
        alignItems="center"
        mx="auto"
        maxW="1600px"
        w="100%"
        p={8}
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
    </>
  );
};

export async function getStaticProps() {
  const userUrl = process.env.DB_USER_GIT!;
  const posts = await fetchRepos(userUrl);

  return {
    props: {
      posts,
      userUrl,
    },
  };
}

export default Index;
