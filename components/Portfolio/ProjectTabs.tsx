import {
  Card,
  CardBody,
  CardFooter,
  chakra,
  shouldForwardProp,
  Heading,
  Text,
  Divider,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {content} from '@/data/portfolio';
import {SECTION_PADDING, STANDARD_MARGIN} from '@/utils/constants';
import Image from 'next/image';

const PortfolioImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    shouldForwardProp(prop) ||
    prop === 'width' ||
    prop === 'height' ||
    prop === 'alt',
});

export function ProjectTabs(): JSX.Element {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={SECTION_PADDING}
    >
      {content.map((tab) => (
        <GridItem key={tab.name}>
          <Card>
            <CardBody>
              <PortfolioImage
                src={tab.screenshot}
                alt={`${tab.name} screenshot`}
                width={1920}
                height={926}
                css={{
                  height: 'auto',
                  width: 'auto',
                }}
              />
              <Heading as="h3" size="lg" mt={STANDARD_MARGIN}>
                {tab.name}
              </Heading>
              <Text mt={STANDARD_MARGIN}>{tab.shortDesc}</Text>
            </CardBody>
            <Divider />
            <CardFooter justify="flex-end">
              <Button colorScheme="telegram">View Project</Button>
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
}

ProjectTabs.displayName = 'ProjectTabs';
