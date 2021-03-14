import React from 'react';

export default function Flexbox({ children, ...flex }) {
  const styles = {
    'display': 'flex'
  }
  Object.keys(flex).forEach(key => {
    styles[key] = flex[key];
  });
  return (
    <div style={styles}>
      {children}
    </div>
  )
}
