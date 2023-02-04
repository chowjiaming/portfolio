import {Card, CardBody, Heading, Link, Stack, Text} from '@chakra-ui/react';
import Image from 'next/image';

type ContactInfoProps = {
  heading: string;
  value: string;
  icon: string;
  link: string;
};
export default function ContactInfo({
  heading,
  value,
  icon,
  link,
}: ContactInfoProps): JSX.Element {
  return (
    <Card
      as={Link}
      href={link}
      target="_blank"
      direction={{base: 'column', sm: 'row'}}
      overflow="hidden"
      variant="outline"
    >
      <Image src={icon} alt={heading} width={100} height={25} />
      <Stack>
        <CardBody>
          <Heading size="md">{heading}</Heading>

          <Text py="2">{value}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}
