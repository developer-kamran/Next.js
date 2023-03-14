import React from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const Article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <article className='card'>
        <h1>Article #{article.id}</h1>
        <h2>{article.title}:</h2>
        <p>{article.body}</p>
        <Link href='/'>Go back</Link>

        <style>
          {`
            .card {
            padding      : 1.5rem;
            background   : none;
            font-family  : Courier New, Courier, monospace;
            width        : 50%;
            margin-block : 2rem;
            margin-inline: auto;
            border-radius: 10px
        }
         a{
          display:block;
          margin-block:1rem;
          text-align:center;
          font-size:1.25rem;
        }

        .card h2 {
            margin-block : 1rem;
            line-height   : 1.3;
            text-transform: capitalize;
        }

        .card p {
            border        : none;
            letter-spacing: 1px;
            padding       : 0.5rem;
            border-radius : 5px
        }

        @media (max-width:756px) {
            .card {
                width: 75%;
            }
        }
         
          `}
        </style>
      </article>
    </>
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
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({
//     params: {
//       id: id.toString(),
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

export default Article;
