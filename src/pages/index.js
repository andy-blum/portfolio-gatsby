import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import BlogTeaser from '../components/content/blog/BlogTeaser';
import styled from 'styled-components';

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
    <Layout title="Recent Posts">
      <StyledList>
        {nodes.map(node => (
          <li>
            <BlogTeaser {...node} />
          </li>
        ))}
      </StyledList>
    </Layout>
  )
}
