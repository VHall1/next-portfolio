import { Box, Flex } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { SwipeableDrawer } from "@material-ui/core";

interface NavBarProps {
  hidden: boolean;
  handleScroll: (target: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ hidden, handleScroll }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [drawerStatus, setDrawerStatus] = useState(false);

  const toggleDrawer = () => {
    setDrawerStatus(!drawerStatus);
  };

  useEffect(() => {
    const getWindowWidth = () => {
      const { innerWidth: width } = window;
      return width;
    };

    const handleResize = () => {
      setScreenWidth(getWindowWidth());
      setDrawerStatus(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Box id="navbar" className={`${hidden ? "hidden" : null}`}>
        <Flex className="wrapper">
          <Box className="link home" onClick={() => handleScroll("funnel")}>
            👨‍💻 Victor
          </Box>
          {screenWidth > 768 ? (
            <>
              <Box className="link" onClick={() => handleScroll("funnel")}>
                About
              </Box>
              <Box className="link" onClick={() => handleScroll("portfolio")}>
                Projects
              </Box>
            </>
          ) : (
            <Box ml="auto">
              <Hamburger
                toggled={drawerStatus}
                toggle={toggleDrawer}
                size={20}
              />
            </Box>
          )}
        </Flex>
      </Box>
      <SwipeableDrawer
        style={{ marginTop: "500px" }}
        id="drawer"
        anchor="right"
        open={drawerStatus}
        onClose={() => setDrawerStatus(false)}
        onOpen={() => setDrawerStatus(true)}
      >
        <Box className="link" onClick={() => handleScroll("funnel")}>
          Home
        </Box>
        <Box className="link" onClick={() => handleScroll("funnel")}>
          About
        </Box>
        <Box className="link" onClick={() => handleScroll("portfolio")}>
          Projects
        </Box>
      </SwipeableDrawer>
    </>
  );
};
