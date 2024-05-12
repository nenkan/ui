import React from 'react';
import MarkdownRegion from '../../../src/markdown-region';
import markdownTest from './TEST.md.js';
import '@nenkan/css/markdown-region.scss';

export default {
  title: 'MarkdownRegion',
  component: MarkdownRegion,
};

export const MarkdownRegionExample = () => <MarkdownRegion source={markdownTest.source} />;
