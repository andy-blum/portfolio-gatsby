import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SummaryOrTrimmed from '../../utils/SummaryOrTrimmed';

const StyledArticle = styled.article`
  .preview {
    margin-left: 1em;
    font-weight: 300;
    font-size: 0.9em;
  }
`;

export default function BlogTeaser(node) {
  return (
    <>
      <StyledArticle>
        <Link to={node.path.alias}>{node.title}</Link>
        <div className="preview">
          <strong>{node.created}</strong><br />
          <SummaryOrTrimmed  {...node.body} />
        </div>
      </StyledArticle>
    </>
  )
}
