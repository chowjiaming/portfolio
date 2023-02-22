import {Input, Textarea} from '@chakra-ui/react';
import {FormControl, FormErrorMessage, FormLabel} from '@chakra-ui/react';
import {type ContactFormTypes} from '@/utils/types';
import {type UseFormRegister} from 'react-hook-form';

type ContactInputProps = {
  name: keyof ContactFormTypes;
  label: string;
  register: UseFormRegister<ContactFormTypes>;
  isTextArea?: boolean;
  error?: string;
};
export function FormInput({
  name,
  label,
  register,
  isTextArea,
  error,
}: ContactInputProps): JSX.Element {
  return (
    <FormControl variant="floating" isInvalid={!!error}>
      {isTextArea ? (
        <Textarea as={Input} placeholder=" " {...register(name)} />
      ) : (
        <Input type="text" placeholder=" " {...register(name)} />
      )}
      <FormLabel>{label}</FormLabel>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}

FormInput.displayName = 'FormInput';
