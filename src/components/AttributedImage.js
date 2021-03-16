import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  z-index: 1;
  line-height: 0;

  & > .attribution {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0.5em 1em;
    transition: transform 0.33s ease-in-out;
    z-index: 2;
    text-align: right;
    line-height: 1;

    span {
      position: relative;
      z-index: 3
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--white);
      opacity: 0.75;
      z-index:1;
    }
  }

  &:hover,
  &:focus {
    & > .attribution {
      transform: translateY(-100%);
    }
  }
`;

export default function AttributedImage({ banner: { image, alt, attribution } }) {
  return (
    <BannerWrapper>
      <GatsbyImage image={image} alt={alt} />
      {attribution ?
        <div className="attribution">
          <span dangerouslySetInnerHTML={{ __html: attribution }}></span>
        </div>
        : ''}
    </BannerWrapper>
  );
}
