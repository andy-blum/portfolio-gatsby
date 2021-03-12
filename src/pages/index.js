import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';

export const query = graphql`
    {
      allNodeBlog(sort: {fields: created, order: DESC}, limit: 25) {
        nodes {
          drupal_internal__nid
          title
          path {
            alias
          }
        }
      }
    }
  `;

export default function IndexPage({ data }) {
  const nodes = data.allNodeBlog.nodes
  return (
    <Layout title="Recent Posts">
      <ol>
        {nodes.map(node => (
          <li>
            <Link to={node.path.alias}>{node.title}</Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
