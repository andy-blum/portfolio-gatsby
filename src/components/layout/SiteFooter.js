import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--light);
  padding: 1em 0;
  font-size: 0.75rem;s
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
