import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import BlogTeaser from '../components/content/blog/BlogTeaser';
import styled from 'styled-components';
import SEO from '../components/SEO';

export const query = graphql`
    {
      allNodeBlog(
        sort: {fields: created, order: DESC}
        limit: 5
        filter: {status: {eq: true}}
      ) {
        nodes {
          drupal_internal__nid
          title
          path {
            alias
          }
          created(formatString: "MMM DD YYYY")
          body {
            summary
            processed
          }
        }
      }
    }
  `;

const StyledList = styled.ol`

  li + li {
    margin-top: 1em;
  }
`;

export default function IndexPage({ data }) {
  const nodes = data.allNodeBlog.nodes
  return (
    <>
      <SEO>
        <title>Home</title>
      </SEO>
      <Layout>
        <h1 className="visually-hidden">Home</h1>
        <div>
          <h2>Hi, I'm Andy.</h2>
          <p>As a Science-Teacher-Turned-Web-Developer, I love finding simple & elegant solutions to difficult problems and my passion for constant learning has kept me driven to stay on top of the ever-changing world of web technologies. I've worked with clients in a range of industries including manufacturing, public education, municipalities, and even a gubernatorial campaign. Whenever possible, I love giving back to the open-source technologies that make my work possible and the FOSS community at-large. </p>
          <h2>Recent Posts</h2>
          <StyledList>
            {nodes.map(node => (
              <li>
                <BlogTeaser {...node} />
              </li>
            ))}
          </StyledList>
        </div>
      </Layout>
    </>
  )
}
