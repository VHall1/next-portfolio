import { Flex, Text, Heading } from "@chakra-ui/core";
// import { Form, Formik } from "formik";
import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
// import { InputField } from "../components/InputField";
import { NavBar } from "../components/NavBar";
// import { TextField } from "../components/TextField";

const Contact: React.FC = () => {
  // const toast = useToast();

  return (
    <>
      <Head>
        <title>Victor Hall - Contact</title>
      </Head>
      <Flex direction="column" height="100%">
        <NavBar />
        <Flex direction="column" mx="auto" maxW="900px" w="100%" mb={24}>
          <Heading fontWeight={600} mt={24} mb={8} as="h1" fontSize="30px">
            Contact
          </Heading>
          <Text>For al enquires, please email victorhallpsn@hotmail.com</Text>
          {/* <Box borderWidth="1px" rounded="lg" p={6} background="aliceBlue">
            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              onSubmit={async (values, { setErrors }) => {
                await new Promise(() => {
                  setTimeout(() => {
                    toast({
                      title: "Message sent.",
                      description: "Your message was sent successfully!",
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
          </Box> */}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Contact;
