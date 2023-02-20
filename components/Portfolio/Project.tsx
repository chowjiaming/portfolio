import {SECTION_PADDING} from '@/utils/constants';
import {
  Box,
  Tooltip,
  chakra,
  shouldForwardProp,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';

const PortfolioImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    shouldForwardProp(prop) ||
    prop === 'width' ||
    prop === 'height' ||
    prop === 'alt',
  baseStyle: {
    _hover: {
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease-in-out',
    },
  },
});

type ProjectProps = {
  name: string;
  screenshot: string;
  shortDesc: string;
  longDesc: string;
};
export function Project({
  name,
  screenshot,
  shortDesc,
  longDesc,
}: ProjectProps): JSX.Element {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Box w={'full'} h={'full'} p={SECTION_PADDING}>
        <Tooltip label={name} aria-label={name}>
          <PortfolioImage
            src={screenshot}
            alt={name}
            width={1920}
            height={926}
            css={{
              height: 'auto',
              width: 'auto',
            }}
          />
        </Tooltip>
        <Text>{shortDesc}</Text>
        <Button onClick={onOpen}>View Project</Button>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset={'slideInBottom'}
        size={{
          base: 'xl',
          md: 'xl',
          lg: '2xl',
          xl: '3xl',
        }}
        isCentered
      >
        <ModalOverlay />
        <ModalCloseButton />
        <ModalContent>
          <PortfolioImage
            src={screenshot}
            alt={name}
            width={1920}
            height={926}
            css={{
              height: 'auto',
              width: 'auto',
            }}
          />
          <ModalHeader>
            <Heading>{name}</Heading>
          </ModalHeader>

          <ModalBody>
            <ModalCloseButton />
            <Flex
              direction={{
                base: 'column',
                md: 'row',
              }}
              gap={{
                base: 0,
                md: SECTION_PADDING,
              }}
            >
              <Box flex={3}>
                <Text>{longDesc}</Text>
              </Box>
              <Box flex={1}>
                <Heading as={'h3'} size={'md'}>
                  Technologies
                </Heading>
                <Text>React</Text>
                <Text>Next.js</Text>
                <Text>Chakra UI</Text>
                <Heading as={'h3'} size={'md'}>
                  Links
                </Heading>
                <Text>GitHub</Text>
                <Text>Live</Text>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

Project.displayName = 'Project';
