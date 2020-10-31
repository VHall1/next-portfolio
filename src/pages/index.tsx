import { Grid } from "@chakra-ui/core";
import React, { useState } from "react";
import { GitHub } from "../components/GitHub";
import { NavBar } from "../components/navbar";

const Index = () => {
  const [state, setstate] = useState([
    {
      name: "developerFolio",
      description: "🔥 React + Github Issues 👉 Your Personal Blog",
      stars: 259,
      language: "JavaScript",
    },
    {
      name: "developerFolio",
      description: "🔥 React + Github Issues 👉 Your Personal Blog",
      stars: 259,
      language: "JavaScript",
    },
    {
      name: "developerFolio",
      description: "🔥 React + Github Issues 👉 Your Personal Blog",
      stars: 259,
      language: "JavaScript",
    },
    {
      name: "developerFolio",
      description: "🔥 React + Github Issues 👉 Your Personal Blog",
      stars: 259,
      language: "JavaScript",
    },
    {
      name: "developerFolio",
      description: "🔥 React + Github Issues 👉 Your Personal Blog",
      stars: 259,
      language: "JavaScript",
    },
    {
      name: "developerFolio",
      description: "🔥 React + Github Issues 👉 Your Personal Blog",
      stars: 259,
      language: "JavaScript",
    },
  ]);

  // useEffect(() => {
  //   fetch;
  //   return () => {
  //     cleanup;
  //   };
  // }, []);

  return (
    <>
      <NavBar />
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {state.map(({ name, description, stars, language }, i) => (
          <GitHub
            name={name}
            description={description}
            stars={stars}
            language={language}
          />
        ))}
      </Grid>
    </>
  );
};

export default Index;
