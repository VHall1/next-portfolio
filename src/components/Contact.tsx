import { Flex, Heading, useToast, Box, Button, Grid } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "./InputField";
import { TextField } from "./TextField";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const toast = useToast();

  return (
    <>
      <Flex direction="column" id="contact">
        <Heading fontWeight={600} mt={24} mb={8} as="h1" fontSize="30px">
          Contact
        </Heading>

        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          onSubmit={async (values, { resetForm }) => {
            return emailjs
              .send(
                "service_m3i7v0o",
                "template_kqmssmw",
                values,
                "user_DEa3xt4ICIK5Ij1joo356"
              )
              .then((res) => {
                resetForm({});
                if (res.text.includes("OK")) {
                  toast({
                    title: "Message sent.",
                    description: "Your message was sent successfully!",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid">
                <InputField
                  required
                  name="name"
                  placeholder="name"
                  label="Your Name"
                  className="name"
                />
                <InputField
                  required
                  name="email"
                  placeholder="email"
                  label="Your Email"
                  type="email"
                  className="email"
                />
                <InputField
                  name="subject"
                  placeholder="subject"
                  label="Subject"
                  type="text"
                  className="subject"
                />
                <TextField
                  required
                  name="message"
                  placeholder="message..."
                  label="Your Message"
                  className="message"
                />
              </div>
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
      </Flex>
    </>
  );
};

export default Contact;
