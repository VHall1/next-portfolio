import { Flex, Button, Text } from "@chakra-ui/core";
import React from "react";
import { FiCodesandbox, FiGithub } from "react-icons/fi";

export interface ProjectProps {
  name: string;
  description: string;
  source: string;
  demo: string;
  image: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  source,
  demo,
  image,
}) => {
  return (
    <Flex className="project-wrapper">
      <img src={image} alt={name} />
      <Flex className="project-content">
        <Text className="title">{name}</Text>
        <Text className="description">{description}</Text>

        <Flex className="actions">
          <Button
            variantColor="teal"
            leftIcon={FiGithub}
            onClick={() => window.open(source, "_blank")}
          >
            Source
          </Button>
          <Button
            variantColor="green"
            leftIcon={FiCodesandbox}
            onClick={() => window.open(demo, "_blank")}
          >
            Demo
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Project;
