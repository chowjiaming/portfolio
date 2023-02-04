import {Input, Textarea} from '@chakra-ui/react';
import {UseFormRegister, FieldValues} from 'react-hook-form';

type ContactInputProps = {
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
};

function FormInput(): JSX.Element {
  return <></>;
}

function TextareaFormInput(): JSX.Element {
  return <></>;
}

export const ContactInput = {
  FormInput,
  TextareaFormInput,
};
