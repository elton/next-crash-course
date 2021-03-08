import ArticleItem from './ArticleItem';
const ArticleList = ({ articles }) => {
  return (
    <div className='flex items-center justify-center flex-wrap max-w-3xl mt-12 sm:flex-col w-full'>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
