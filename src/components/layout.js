import React from 'react';
import * as css from "./layout.module.css";
import { useStaticQuery, graphql, Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);  
    return (
        <div>          
            <nav className={css.header}>
                <Link className={css.menuitem} to="/">Home</Link>
                <Link className={[css.marginLeft, css.menuitem].join(" ")} to="/about">About</Link>
                <Link className={[css.marginLeft, css.menuitem].join(" ")} to="/blog">Blog</Link>
            </nav>
            <main className={css.padding}>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
}

export default Layout;