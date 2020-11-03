import { Flex, Heading, Grid, Box } from "@chakra-ui/core";
import Head from "next/head";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiGithub } from "react-icons/fi";
import { Footer } from "../components/Footer";
import { GitHub, GitHubProps } from "../components/GitHub";
import { NavBar } from "../components/NavBar";
import { fetchRepos } from "../utils/fetchGitRepos";

interface portfolioProps {
  repos: GitHubProps[];
}

const Portfolio: React.FC<portfolioProps> = ({ repos }) => {
  return (
    <>
      <Head>
        <title>Victor Hall - Portfolio</title>
      </Head>
      <Flex direction="column" height="100%">
        <NavBar />
        <Flex direction="column" alignItems="center" mb={24}>
          <Heading mx="auto" mt={24} fontSize="30px" fontWeight={600}>
            GitHub Projects
          </Heading>
          <Flex w="100%" maxW="1180px" mx="auto" mb={8} mt={6}>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <Fade direction="up">
                {repos?.map(
                  ({ name, description, stars, language, link }, index) => (
                    <GitHub
                      name={name}
                      description={description}
                      stars={stars}
                      language={language}
                      link={link}
                      key={index}
                    />
                  )
                )}
              </Fade>
            </Grid>
          </Flex>
          <Flex
            alignItems="center"
            className="up"
            onClick={() => window.open("https://github.com/vhall1", "_blank")}
          >
            <Box mr={2}>
              <FiGithub />
            </Box>
            Other Projects
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const repos = await fetchRepos();

  return {
    props: {
      repos,
    },
  };
}
