import {Alert, AlertIcon, AlertTitle} from '@chakra-ui/react';

type FormAlertProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorMessage?: string;
};
export default function FormAlert({
  errorMessage,
}: FormAlertProps): JSX.Element | null {
  if (!errorMessage) return null;
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{errorMessage}</AlertTitle>
    </Alert>
  );
}
