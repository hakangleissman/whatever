import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
      <p>About the about</p>
   </Layout>
    );
}
export const Head = () => 
       <Seo title="About Page" />

export default AboutPage;