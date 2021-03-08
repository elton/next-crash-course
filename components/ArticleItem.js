import Link from 'next/link';
const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className='m-4 p-6 text-left border-gray-400 border rounded-lg transition duration-150 hover:border-cyan-500 hover:text-cyan-500'>
        <h3 className='mb-4 text-2xl font-bold'>{article.title} &rarr;</h3>
        <p className='text-xl'>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
