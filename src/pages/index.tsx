import { Grid } from "@chakra-ui/core";
import React from "react";
import { GitHub, GitHubProps } from "../components/GitHub";
import { NavBar } from "../components/NavBar";
import { fetchRepos } from "../utils/fetchGitRepos";

interface indexProps {
  posts: GitHubProps[];
}

const Index: React.FC<indexProps> = ({ posts }) => {
  return (
    <>
      <NavBar />
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
    </>
  );
};

export async function getStaticProps() {
  const posts = fetchRepos();

  return {
    props: {
      posts,
    },
  };
}

export default Index;
