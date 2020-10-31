import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/core";
import { useField } from "formik";
import React, { TextareaHTMLAttributes } from "react";

type TextFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
  placeholder: string;
};

export const TextField: React.FC<TextFieldProps> = ({
  label,
  required = false,
  placeholder,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Textarea
        {...field}
        placeholder={placeholder}
        isRequired={required}
        id={field.name}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
