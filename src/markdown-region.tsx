import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// GitHub-flavored markdown (tables, task lists, strikethrough, autolinks), so editor
// previews match what the public sites render.
const REMARK_PLUGINS = [remarkGfm];

function MarkdownRegion(props) {
  return (
    <div className={'markdown-region' + (props.className ? ` ${props.className}` : '')}>
      <ReactMarkdown remarkPlugins={REMARK_PLUGINS}>
        {props.source}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRegion;
