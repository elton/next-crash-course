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

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
