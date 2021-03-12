import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import Reset from '../../styles/Reset';
import Typography from '../../styles/Typography';
import SEO from '../SEO';
import SiteHeader from './SiteHeader';

export default function Layout({ children, ...page }) {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Typography />
      <SEO>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CRSV,MONO@-15..0,300..1000,0..1,0..1&display=swap" rel="stylesheet" />
        <title>{page.title}</title>
      </SEO>
      <SiteHeader />
      <main className="container">
        <h1>{page.title}</h1>
        {children}
      </main>
      <footer>(footer)</footer>
    </>
  )
}
