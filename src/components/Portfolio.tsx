import { Flex, Grid, Box } from "@chakra-ui/core";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiGithub } from "react-icons/fi";

import Project, { ProjectProps } from "./Project";

const projects: ProjectProps[] = [
  {
    name: "🔥 Firebase Chat",
    image: "/firebase-chat.gif",
    description:
      "Chat with others in real-time. Built with React and Firebase. Hosted on Netlify",
    source: "https://github.com/VHall1/firebase-chat",
    demo: "https://condescending-lalande-a15c2d.netlify.app/",
  },
  {
    name: "📈 Expense Tracker",
    image: "/expense-tracker.png",
    description:
      "Expense tracker app. Built with React and Typescript. Original project by @bradtraversy. Hosted on Netlify",
    source: "https://github.com/VHall1/react-expense-tracker",
    demo: "https://pensive-ptolemy-58671a.netlify.app/",
  },
  {
    name: "⛅ React Weather",
    image: "/weather.png",
    description:
      "Simple weather app. Built with React and OpenWeatherMap. Hosted on Netlify",
    source: "https://github.com/VHall1/react-weather",
    demo: "https://vigilant-leakey-c36a17.netlify.app/",
  },
];

const Portfolio: React.FC = () => {
  return (
    <Flex direction="column" id="portfolio">
      <h2>Projects</h2>
      <Flex mb={8} mt={6} className="cards-wrapper">
        <Grid
          w="100%"
          templateColumns="repeat(3, 1fr)"
          className="project-cards"
        >
          <Fade triggerOnce>
            {projects.map(
              ({ name, description, image, source, demo }, index) => (
                <Project
                  name={name}
                  description={description}
                  image={image}
                  source={source}
                  demo={demo}
                  key={index}
                />
              )
            )}
          </Fade>
        </Grid>
      </Flex>
      <Flex
        mx="auto"
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
  );
};

export default Portfolio;
