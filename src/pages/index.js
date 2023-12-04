//import react (imr)
import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

//stateless componen function (scf)
const IndexPage = () => {
  return (
   <Layout pageTitle="Home">
      <p>Home is home</p>
      <StaticImage alt="" src="https://www.investsanliurfa.com/public/uploads/post/birecik-koprusu-1533715401.png"></StaticImage>
   </Layout>
  )
}
//exnfn
export const Head = () => <Seo title="Home Page" />

export default IndexPage;
