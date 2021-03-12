import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { FaDrupal, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Nav from '../Nav';
import Flexbox from './Flexbox';

const StyledHeader = styled.header`

  padding: 1em 0;

  :after {
    content:'';
    display: block;
    height: 5px;
    background: var(--accent);
    border-radius: 10px;
    margin-top: 0.5em;
  }
`;

export default function SiteHeader({ children }) {
  return (
    <StyledHeader className="container">
      <Flexbox align-items="flex-end" justify-content="space-between">
        <Link to="/">Andy Blum</Link>
        <Nav>
          <ul>
            <li>
              <a href="https://github.com/andy-blum/">
                <span className="visually-hidden">GitHub Profile</span>
                <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.drupal.org/u/andy-blum">
                <span className="visually-hidden">Drupal Profile</span>
                <FaDrupal aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/andy__blum">
                <span className="visually-hidden">Twitter Profile</span>
                <FaTwitter aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andyblum/">
                <span className="visually-hidden">LinkedIn Profile</span>
                <FaLinkedin aria-hidden="true" />
              </a>
            </li>
          </ul>
        </Nav>
      </Flexbox>
    </StyledHeader>
  )
}
