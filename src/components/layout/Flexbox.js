import React from 'react';
import styled from 'styled-components';

export default function Flexbox({ children, ...flex }) {
  const styles = {
    'display': 'flex'
  }
  Object.keys(flex).forEach(key => {
    styles[key] = flex[key];
  });
  console.clear();
  console.log(styles);
  return (
    <div style={styles}>
      {children}
    </div>
  )
}
