import React from 'react';
import styled from 'styled-components';
import 'react-icons';

const StyledNav = styled.nav`
  ul {
    display: flex;
    align-items: flex-end;

    a {
      padding: 0.5em;
    }
  }
`;

export default function Nav({ children }) {
  return (
    <StyledNav>
      {children}
    </StyledNav>
  )
}
