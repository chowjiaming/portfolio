import {Button, VStack, useToast} from '@chakra-ui/react';
// import { useState } from "react";
import {ContactFormTypes} from '@/utils/types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {contactValidationSchema} from '@/utils/validations';
import ContactFormInput from './ContactFormInput';
import {STANDARD_MARGIN} from '@/utils/constants';

export default function ContactForm(): JSX.Element {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm<ContactFormTypes>({
    resolver: yupResolver(contactValidationSchema),
  });
  const onSubmit = async (data: ContactFormTypes) => {
    // placeholder for API call
    console.log('submitting', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: 'Submitted!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={STANDARD_MARGIN} mb={STANDARD_MARGIN}>
        <ContactFormInput
          name="name"
          label="Name"
          register={register}
          error={errors.name?.message}
        />
        <ContactFormInput
          name="email"
          label="Email"
          register={register}
          error={errors.email?.message}
        />
        <ContactFormInput
          name="message"
          label="Message"
          register={register}
          error={errors.message?.message}
          isTextArea
        />
      </VStack>
      <Button
        type="submit"
        colorScheme="blue"
        size="lg"
        isLoading={isSubmitting}
        loadingText="Submitting..."
      >
        Submit
      </Button>
    </form>
  );
}
