import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import highlight from '../utils/highlight';

export default function BlogPage({ pageContext: node }) {
  useEffect(() => {
    highlight.highlightCode()
  })
  return (
    <>
      <Layout title={node.title}>
        <div dangerouslySetInnerHTML={{ __html: node.body.processed }} />
      </Layout>
    </>
  );
}

