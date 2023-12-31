import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';

const BlogPost = ({data, children}) => {
    console.log({data});
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </Layout>
    );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
export const Head = () => <Seo title="Blog post title"></Seo>;

export default BlogPost;