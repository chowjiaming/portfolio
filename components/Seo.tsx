import Head from 'next/head';

type SeoProps = {
  pageTitle?: string;
};
export default function Seo({pageTitle}: SeoProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{`Joseph Chow${pageTitle && ` - ${pageTitle}`}`}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="portfolio, developer, resume, cv, react, nextjs"
        />
        <meta
          name="description"
          content="Joseph Chow - My personal work portfolio"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="my-favicon.ico" />
      </Head>
    </>
  );
}
