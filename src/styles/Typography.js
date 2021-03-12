import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  // Root
  html {
    background: var(--white);
    color: var(--dark);

    font-family: "Recursive", sans-serif;
    font-variation-settings: 'MONO' 0, 'wght' 400, 'slnt' 0, 'CRSV' 0;
    font-size: 18px;
    line-height: 1.75;
  }

  // Default stacking margin
  * + :is(
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, fieldset, form,
  table, article, details, figure, audio, video, iframe
  ) {
      margin-top: 2em;
  }

  // Headings
  :is(h1, h2, h3, h4, h5, h6) {
    font-variation-settings: 'wght' 800, 'slnt' -15, 'CRSV' 0;
    line-height: 1.25;

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }

  h1 {font-size: 2.5em}
  h2 {font-size: 2em}
  h3 {font-size: 1.75em}
  h4 {font-size: 1.5em}
  h5 {font-size: 1.1em}
  h6 {font-size: 1em}

  // Code Blocks
  pre {
    font-size:inherit;
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 80ch;

    font-family: "Recursive", monospace;
    line-height: 1.5;
    font-variation-settings: 'wght' 300;
    font-size: 15px;

    background: #222;
    border: 2px solid #555;
    border-top:none;
    color: #fff;
    padding: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 13px 5px rgba(0,0,0,0.3);

    code {
      display: block;
      width: 100%;
      overflow-x: scroll;
      padding: 1em;
      background-color: transparent;

      &.hljs {
        background: inherit;
        color: inherit;
        padding: 1em;
      }
    }

    &:before {
      content: '';
      display: block;
      background: #555;
      width: 100%;
      height: 1.5em;
      border-radius: 10px 10px 0 0;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0.8em;
      left: 0.75em;
      transform: translateY(-50%);
      width: 0.75em;
      height: 0.75em;
      background: lightcoral;
      border-radius: 50%;
      box-shadow:
        1.1em 0 0 0 goldenrod,
        2.2em 0 0 0 mediumseagreen;
    }
  }

  // Code Inline
  code {
    font-family: "Recursive", monospace;
    font-variation-settings: "MONO" 1, "wght" 300;
    background-color: var(--light);
    padding: 0 0.25em;
  }

  // Links
  a {
    color: var(--accent);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export default Typography;
