import SingleArticle from './SingleArticle';

const Article = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => {
        return <SingleArticle article={article} key={index} />;
      })}
    </div>
  );
};

export default Article;
