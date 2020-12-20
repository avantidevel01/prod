import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className="bg-gray-200 text-xs p-3 bottom-0 text-center w-full">
      <p>{data.site.siteMetadata.author}, © 2020</p>
    </footer>
  );
};
export default Footer;
