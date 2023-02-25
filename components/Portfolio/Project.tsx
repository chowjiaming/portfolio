import {
  Card,
  CardBody,
  chakra,
  shouldForwardProp,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Flex,
  IconButton,
  ButtonGroup,
  Link,
} from '@chakra-ui/react';
import {
  LARGE_MARGIN,
  SECTION_PADDING,
  STANDARD_MARGIN,
} from '@/utils/constants';
import {FaCode, FaExternalLinkAlt} from 'react-icons/fa';
import Image from 'next/image';

const PortfolioImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    shouldForwardProp(prop) ||
    prop === 'width' ||
    prop === 'height' ||
    prop === 'alt',
});

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  link: string;
  skills: string[];
};
export function Project({
  title,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  link,
  skills,
}: ProjectProps): JSX.Element {
  return (
    <Card as="article" h="full" align="center" justify="center" direction="row">
      <CardBody
        as={Grid}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          '2xl': 'repeat(2, 1fr)',
        }}
        gap={SECTION_PADDING}
      >
        <GridItem as={Flex} justify="center">
          <PortfolioImage
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        </GridItem>
        <GridItem
          as={Flex}
          direction="column"
          gap={LARGE_MARGIN}
          align="center"
        >
          <Heading as="h2" size="lg" textAlign="center">
            {title}
          </Heading>
          <Text textAlign="justify">{description}</Text>
          {skills.length > 0 && (
            <Flex gap={STANDARD_MARGIN} flexWrap="wrap" justify="center">
              {skills.map((skill) => (
                <GridItem key={skill}>
                  <Button variant="outline" colorScheme="teal" size="sm">
                    {skill}
                  </Button>
                </GridItem>
              ))}
            </Flex>
          )}
          <ButtonGroup mt="auto">
            <IconButton
              as={Link}
              href={link}
              aria-label="View project"
              icon={<FaExternalLinkAlt />}
              isExternal
            />
            <IconButton
              as={Link}
              href={link}
              aria-label="View project code"
              icon={<FaCode />}
              isExternal
            />
          </ButtonGroup>
        </GridItem>
      </CardBody>
    </Card>
  );
}

Project.displayName = 'Project';
