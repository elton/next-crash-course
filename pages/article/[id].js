import Link from 'next/link';
import { useRouter } from 'next/router';

const article = ({ article }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='max-w-3xl'>
        <h1 className='text-3xl font-bold mb-5'>{article.title}</h1>
        <p className='text-gray-700 text-base'>{article.body}</p>
        <Link href='/'>Go Back</Link>
      </div>
    );
  }
};

// This function gets called at build time
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  // Get the paths we want to pre-render based on posts
  // const ids = articles.map((article) => article.id);
  // const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  const paths = articles.map((article) => `/article/${article.id}`);

  // { fallback: false } means other routes should 404.
  return {
    paths,
    // Enable statically generating additional pages
    // For example: `/article/3`
    fallback: true,
  };
};

// This function gets called at build time
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
};

export default article;
