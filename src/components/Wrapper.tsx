import { Box } from "@chakra-ui/core";
import React from "react";

interface WrapperProps {
  variant?: "small" | "regular";
  props?: Object;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  props,
  variant = "regular",
}) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
      {...props}
    >
      {children}
    </Box>
  );
};
