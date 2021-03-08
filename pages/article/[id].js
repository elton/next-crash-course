import Link from 'next/link';
const article = ({ article }) => {
  return (
    <div className='max-w-3xl'>
      <h1 className='text-3xl font-bold mb-5'>{article.title}</h1>
      <p className='text-gray-700 text-base'>{article.body}</p>
      <Link href='/'>Go Back</Link>
    </div>
  );
};

// This function gets called at build time
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

// This function gets called at build time
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  // Get the paths we want to pre-render based on posts
  // const ids = articles.map((article) => article.id);
  // const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  const paths = articles.map((article) => `/article/${article.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default article;
