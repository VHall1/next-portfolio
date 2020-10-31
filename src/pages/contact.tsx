import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { NavBar } from "../components/NavBar";
import { TextField } from "../components/TextField";

const Contact: React.FC<{}> = () => {
  const toast = useToast();

  return (
    <>
      <NavBar />
      <Flex direction="column" mx="auto" maxW="900px" w="100%">
        <Heading mt={24} mb={8} as="h1" size="xl">
          Get In Touch
        </Heading>
        <Box borderWidth="1px" rounded="lg" p={6} background="aliceBlue">
          <Formik
            initialValues={{ name: "", email: "", subject: "", message: "" }}
            onSubmit={async (values, { setErrors }) => {
              await new Promise(() => {
                setTimeout(() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }, 1000);
              });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Flex mt={4}>
                  <Box mr={4} flex="1">
                    <InputField
                      required
                      name="name"
                      placeholder="name"
                      label="🖊 Your Name"
                    />
                  </Box>
                  <Box flex="1">
                    <InputField
                      required
                      name="email"
                      placeholder="email"
                      label="📧 Your Email"
                      type="email"
                    />
                  </Box>
                </Flex>
                <Box mt={4}>
                  <InputField
                    name="subject"
                    placeholder="subject"
                    label="🤔 Subject"
                    type="text"
                  />
                </Box>
                <Box mt={4}>
                  <TextField
                    required
                    name="message"
                    placeholder="message..."
                    label="✍ Your Message"
                  />
                </Box>
                <Button
                  type="submit"
                  variantColor="purple"
                  isLoading={isSubmitting}
                  mt={4}
                >
                  Send
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
