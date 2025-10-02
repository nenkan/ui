import React from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownRegion(props) {
  return (
    <div className={'markdown-region' + (props.className ? ` ${props.className}` : '')}>
      <ReactMarkdown>
        {props.source}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRegion;
