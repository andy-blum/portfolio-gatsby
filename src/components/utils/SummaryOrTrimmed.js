import React from 'react';

export default function SummaryOrTrimmed({ summary, processed }) {
  const text = (summary !== '') ? summary : processed;
  const textNoHeaders = text.replace(/<(h|H)\d[^>]*>.+?<\/(h|H)\d>/g, "");
  const textHTML = textNoHeaders
    .substring(0, (textNoHeaders.substring(0, 600).search(/<\/(p|P)>/g) + 4))
  return (
    <div dangerouslySetInnerHTML={{ __html: textHTML }}>
    </div>
  )

}
