import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Latest News and Articles</h1>
      <p>
        Just a few notes from the industry, new products, and partner informaiton.
      </p>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
          <div>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              <p>{edge.node.excerpt}</p>
              </Link>
          </div>
          )
        })}
    </Layout>
  )
}

export default BlogPage;
