import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebDev</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='keywords' content='web development' />
      </Head>

      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
