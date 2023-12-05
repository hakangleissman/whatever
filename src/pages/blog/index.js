import React from 'react';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, Link } from 'gatsby';

/*const contentful = require('contentful')

const client = contentful.createClient({
  space: 'xfa6ombx9hmu',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'nWu3nUPwTV05yi6K7BvUlMy4IHNw8yyTUdu83ee8D50'
})

client.getEntry('2jfGjdskPcXORsDfu3jPfY')
  .then((entry) => console.log(entry))
  .catch(console.error)
  */

  /*
  query postEntryQuery {
  post(id: "2jfGjdskPcXORsDfu3jPfY") {
     title,
    heroImage{
      fileName
    }
  }
Github access token:
  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
}*/

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
           <Link to={`/blog/${node.frontmatter.slug}`}> <h2>{node.frontmatter.title}</h2></Link>         
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
}

export const query = graphql`
query{
  allMdx(sort: {frontmatter: {date: ASC}}) {
    nodes {
      frontmatter {
        date
        slug
        title
      }
      id
      excerpt
    }
  }
}
`
export const Head = () => <Seo title="My Blog Page" />

export default BlogPage;