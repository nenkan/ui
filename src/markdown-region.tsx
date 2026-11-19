import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

// GitHub-flavored markdown (tables, task lists, strikethrough, autolinks), so editor
// previews match what the public sites render. A single newline becomes a line
// break, the way GitHub comments and issues do. CommonMark would join those
// lines into one paragraph.
const REMARK_PLUGINS = [remarkGfm, remarkBreaks];

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
