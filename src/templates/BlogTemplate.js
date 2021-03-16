import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image"
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import highlight from '../utils/highlight';

const Article = styled.article`
  margin: 0.5em;
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
      field_image {
        alt
      }
      field_image_attribution
      relationships {
        field_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                height: 250
                width: 900
                placeholder: BLURRED
                layout: CONSTRAINED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;

export default function BlogPage({ data }) {
  const { title, body, created, field_image, field_image_attribution } = data.nodeBlog;
  let image = false;
  if (data.nodeBlog.relationships.field_image) {
    image = getImage(data.nodeBlog.relationships.field_image.localFile.childImageSharp);
  }

  useEffect(() => {
    highlight.highlightCode()
  })

  const banner = {
    image: image,
    alt: field_image.alt,
    attribution: field_image_attribution,
  };

  const contents = `<p>${created}</p> ${body.processed}`;

  return (
    <Layout title={title} banner={banner}>
      <Article dangerouslySetInnerHTML={{ __html: contents }} />
    </Layout >
  );
}

