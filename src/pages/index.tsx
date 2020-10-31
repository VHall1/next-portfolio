import { Grid } from "@chakra-ui/core";
import React from "react";
import { GitHub, GitHubProps } from "../components/GitHub";
import { NavBar } from "../components/NavBar";

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
  const res = await fetch(
    `https://api.github.com/users/${process.env.DB_USER_GIT}/repos`
  );
  let fetchedPosts = await res.json();

  fetchedPosts.filter((e: any) => {
    return e.language === "JavaScript" || e.language === "TypeScript";
  });

  const posts: GitHubProps = fetchedPosts.map((e: any) => {
    return {
      name: e.name,
      description: e.description,
      language: e.language,
      stars: e.stargazers_count,
      link: e.html_url,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Index;
