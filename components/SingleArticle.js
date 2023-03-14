import React from 'react';
import Link from 'next/link';
import articleStyles from '../src/styles/Article.module.css';
const SingleArticle = ({ article }) => {
  return (
    <Link href='/article/{id}' as={`/article/${article.id}`}>
      <div className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body.substring(0, 75)}...</p>
      </div>
    </Link>
  );
};

export default SingleArticle;
