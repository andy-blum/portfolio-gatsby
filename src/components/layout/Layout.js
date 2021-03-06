import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import Reset from '../../styles/Reset';
import Typography from '../../styles/Typography';
import AttributedImage from '../AttributedImage';
import SEO from '../SEO';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const StyledLayout = styled.div`
  min-height: 100vh;

  main > h1 {
    margin: 0;
  }

  & > footer {
    position: sticky;
    top: 100%;
  }
`

export default function Layout({ children, ...page }) {

  return (
    <StyledLayout>
      <Reset />
      <GlobalStyles />
      <Typography />
      <SEO>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CRSV,MONO@-15..0,300..1000,0..1,0..1&display=swap" rel="stylesheet" />
        {page.title ? <title>{page.title}</title> : ''}
      </SEO>
      <SiteHeader />
      <main className="container">
        {page.banner ? <AttributedImage banner={page.banner} /> : ''}
        {page.title ? <h1>{page.title}</h1> : ''}
        {children}
      </main>
      <SiteFooter>(footer)</SiteFooter>
    </StyledLayout>
  )
}
