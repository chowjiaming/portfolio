import {Button, Input, VStack, useToast} from '@chakra-ui/react';
// import { useState } from "react";
import {ContactFormTypes} from '@/utils/types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {contactValidationSchema} from '@/utils/validations';
import FormAlert from '@/components/Shared/FormAlert';

export default function ContactForm(): JSX.Element {
  const toast = useToast();
  // const [data, setData] = useState<ContactFormTypes>();

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm<ContactFormTypes>({
    resolver: yupResolver(contactValidationSchema),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: ContactFormTypes) => {
    console.log('onSubmit data:', data);

    // placeholder for API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Submitted!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // setData(data);
    reset();
  };
  // console.log('data:', data);
  console.log('errors:', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Input type="text" placeholder="Name *" {...register('name')} />
        {errors.name && <FormAlert errorMessage={errors.name.message} />}
        <Input type="text" placeholder="Email *" {...register('email')} />
        {errors.email && <FormAlert errorMessage={errors.email.message} />}
        <Input type="text" placeholder="Message *" {...register('message')} />
        {errors.message && <FormAlert errorMessage={errors.message.message} />}

        <Button
          borderRadius="md"
          bg="cyan.600"
          _hover={{bg: 'cyan.200'}}
          variant="ghost"
          type="submit"
          isLoading={isSubmitting}
          loadingText="Submitting..."
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
}
