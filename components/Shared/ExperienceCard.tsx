import {Card, CardBody, Heading, Stack, Text} from '@chakra-ui/react';

export type ExperienceCardProps = {
  position: string;
  company: string;
  tenure: string;
  description: string;
};
export default function ExperienceCard({
  position,
  company,
  tenure,
  description,
}: ExperienceCardProps): JSX.Element {
  return (
    <Card
      maxW={{
        base: 'full',
        lg: '2xl',
      }}
    >
      <CardBody>
        <Stack mt={6} spacing={3}>
          <Heading as={'h3'} size="xl">
            {position}
          </Heading>
          <Heading as={'h4'} size="md">
            {company}
          </Heading>
          <Heading as={'h5'} size="sm">
            {tenure}
          </Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      {/* <Divider />
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        See More
      </Button>
    </CardFooter> */}
    </Card>
  );
}
