import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--light);
  margin-top: 2em;
  padding: 1em 0;
  font-size: 0.75rem;
  text-align: center;
`;

export default function SiteFooter({ children }) {
  return (
    <StyledFooter>
      <div className="container">
        &copy; 2019-{(new Date()).getFullYear()}
      </div>
    </StyledFooter>
  )
}
