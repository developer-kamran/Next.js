import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Articles from '../../components/Articles';
const inter = Inter({ subsets: ['latin'] });

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Next.js App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1> main page</h1>
      <Articles articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=8'
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
