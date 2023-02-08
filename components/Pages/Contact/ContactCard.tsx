import {
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import type {IconType} from 'react-icons';
import {SECTION_PADDING} from '@/utils/constants';

type ContactInfoProps = {
  heading: string;
  value: string;
  icon: IconType;
  link: string;
};
export default function ContactCard({
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
    >
      <Flex>
        <Flex align={'center'} ml={SECTION_PADDING}>
          <Icon as={icon} boxSize="3rem" color="blue.500" />
        </Flex>
        <Stack>
          <CardBody>
            <Heading size="md">{heading}</Heading>
            <Text py="2">{value}</Text>
          </CardBody>
        </Stack>
      </Flex>
    </Card>
  );
}
