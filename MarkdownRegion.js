import React from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownRegion(props) {
  return (
    <ReactMarkdown className={'markdown-region' + (props.className ? ` ${props.className}` : '')}>
      {props.source}
    </ReactMarkdown>
  );
}

export default MarkdownRegion;
