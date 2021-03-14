import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import highlight from '../utils/highlight';

const Article = styled.article`
  & > h1 {
    margin-top: 0;
  }
`

export const query = graphql`
  query ($uuid: String!) {
    nodeBlog(id: {eq: $uuid}) {
      title
      body {
        processed
        summary
      }
      changed(formatString: "MMMM Do, YYYY")
      created(formatString: "MMMM Do, YYYY")
    }
  }
`;

export default function BlogPage({ data }) {
  const { title, body, created } = data.nodeBlog;

  useEffect(() => {
    highlight.highlightCode()
  })

  return (
    <Layout>
      <Article>
        <header>
          {created}
        </header>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body.processed }}></div>
      </Article>

    </Layout>
  );
}

