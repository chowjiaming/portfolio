import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  chakra,
  Divider,
  HStack,
} from '@chakra-ui/react';
import {content, social} from '@/data/hero';
import {SECTION_PADDING, STANDARD_MARGIN} from '@/utils/constants';
import Image from 'next/image';
import ReactTyped from 'react-typed';
import SocialIcon from '@/components/Hero/SocialIcon';
import {Fragment} from 'react';
import Seo from '@/components/Seo';

const HeroImage = chakra(Box, {
  baseStyle: {
    w: {base: 300, md: 345, lg: 400},
    h: {base: 300, md: 345, lg: 400},
  },
});

export default function Home(): JSX.Element {
  return (
    <>
      <Seo pageTitle="Portfolio" />

      <VStack
        id={'home'}
        as="section"
        justify="center"
        align="center"
        direction="column"
        p={SECTION_PADDING}
        minH="100vh"
        spacing={STANDARD_MARGIN}
      >
        <HeroImage>
          <Image
            priority
            src={content.heroImage}
            alt="Profile picture"
            width={400}
            height={400}
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        </HeroImage>
        <Heading
          as="h1"
          fontSize={{base: '3xl', md: '4xl', lg: '5xl'}}
          fontWeight="extrabold"
          textAlign="center"
          mt={STANDARD_MARGIN}
        >
          Hello, I&apos;m {content.name}
        </Heading>
        <VStack spacing={SECTION_PADDING}>
          <ReactTyped
            loop
            typeSpeed={150}
            backSpeed={60}
            strings={['Front End Developer', 'Photographer']}
            smartBackspace
            shuffle={false}
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={0}
            showCursor
            cursorChar="|"
            style={{
              whiteSpace: 'pre',
              display: 'inline-block',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          />
          <Text
            maxW={{
              base: 'xl',
              md: '2xl',
              lg: '3xl',
            }}
            textAlign="center"
          >
            {content.description}
          </Text>
          <HStack spacing={STANDARD_MARGIN} h={STANDARD_MARGIN}>
            {social.map((item, i) => {
              return (
                <Fragment key={item.name}>
                  <SocialIcon {...item} />
                  {i !== social.length - 1 && (
                    <Divider
                      orientation={'vertical'}
                      color={'white'}
                      _dark={{color: 'grey.800'}}
                    />
                  )}
                </Fragment>
              );
            })}
          </HStack>
          <Button as={'a'} variant={'link'} href="/img/profilepic.jpg" download>
            Download CV
          </Button>
        </VStack>
      </VStack>
    </>
  );
}
