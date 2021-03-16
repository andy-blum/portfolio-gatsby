import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --dark: #2a2a2a;
  --light: #eee;
  --white: #fff;
  --accent: #ff8718;
}

@media (prefers-color-scheme: dark) {
  :root {
  --dark: #cdcdcd;
  --light: #333;
  --white: #111;
  --accent: #ff8718;
  }
}


.container {
  width: 900px;
  margin: 0 auto;
  max-width: calc(100% - 2em);
}

.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px,1px,1px,1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}

img, picture, picture source {
  max-width: 100%;
  height: auto;
  border-radius: 7px;

  &[src^='data:image'][src*='base64'] {
    image-rendering: crisp-edges;
    filter: blur(10px);
  }
}

`;

export default GlobalStyles;
