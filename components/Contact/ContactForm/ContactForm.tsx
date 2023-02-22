import {Button, VStack, useToast} from '@chakra-ui/react';
import {type SyntheticEvent} from 'react';
import {type ContactFormTypes} from '@/utils/types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {contactValidationSchema} from '@/utils/validations';
import {FormInput} from '@/components/Contact/ContactForm/FormInput';
import {STANDARD_MARGIN} from '@/utils/constants';

export function ContactForm(): JSX.Element {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm<ContactFormTypes>({
    resolver: yupResolver(contactValidationSchema),
  });
  function onPromise<T>(promise: (event: SyntheticEvent) => Promise<T>) {
    return (event: SyntheticEvent) => {
      if (promise) {
        promise(event).catch((error) => {
          console.log('Unexpected error', error);
        });
      }
    };
  }

  const onSubmit = handleSubmit(async (data: ContactFormTypes) => {
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
  });

  return (
    <form onSubmit={onPromise(onSubmit)}>
      <VStack spacing={STANDARD_MARGIN} mb={STANDARD_MARGIN}>
        <FormInput
          name="name"
          label="Name"
          register={register}
          error={errors.name?.message}
        />
        <FormInput
          name="email"
          label="Email"
          register={register}
          error={errors.email?.message}
        />
        <FormInput
          name="message"
          label="Message"
          register={register}
          error={errors.message?.message}
          isTextArea
        />
      </VStack>
      <Button
        type="submit"
        size="lg"
        isLoading={isSubmitting}
        loadingText="Submitting..."
      >
        Submit
      </Button>
    </form>
  );
}

ContactForm.displayName = 'ContactForm';
