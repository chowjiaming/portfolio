import type {NextPage} from 'next';
import Head from 'next/head';

type Props = {
  title?: string;
  page?: string;
  icon?: string;
  keywords?: string;
  description?: string;
  websiteUrl?: string;
  type?: string;
  siteName?: string;
  imageSource?: string;
  imageType?: string;
  imageAltText?: string;
  imageWidth?: string;
  imageHeight?: string;
  twitterCard?: string;
  twitterName?: string;
};

export const Meta: NextPage<Props> = ({
  title,
  page,
  icon,
  keywords,
  description,
  websiteUrl,
  type,
  siteName,
  imageSource,
  imageType,
  imageAltText,
  imageWidth,
  imageHeight,
  twitterCard,
  twitterName,
}) => {
  return (
    <Head>
      {/* General */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta charSet="utf-8"></meta>
      <meta name="robots" content="follow, index" />
      <meta name="keywords" content={keywords}></meta>
      <link rel="canonical" href={websiteUrl} />
      <meta name="description" content={description} />
      <link rel="icon" href={icon ? icon : '/my-favicon.ico'} />
      <title>{`${title}${page ? ` | ${page}` : ''}`}</title>
      {/* Open Graph */}
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageSource} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:alt" content={imageAltText} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterName} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageSource} />
      <meta name="twitter:image:alt" content={imageAltText} />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Joseph Chow',
  page: '',
  keywords:
    'web development, portfolio, developer, programming, next.js, nextjs, next-js, next, react.js, reactjs, react-js, react, javascript, typescript, chakra-ui, chakra ui, chakra',
  description:
    'My personal development portfolio website, built with Next.js, Chakra UI, and TypeScript.',
  imageSource: 'https://imgur.com/a/vyodKmj',
  imageType: 'image/png',
  imageAltText:
    'My personal development portfolio website, built with Next.js, Chakra UI, and TypeScript.',
  imageWidth: '1920',
  imageHeight: '1080',
  type: 'website',
  websiteUrl: 'https://josephchow.dev',
  siteName: 'Joseph Chow - Portfolio',
  twitterCard: 'summary_large_image',
  twitterName: '@chowjiaming',
};

Meta.displayName = 'Meta';
