import React from 'react';
import { markdown-region } from '..';
import markdownTest from './TEST.md.js';
import '@nenkan/css/markdown-region.scss';

export default {
  title: 'MarkdownRegion',
  component: MarkdownRegion,
};

export const MarkdownRegionExample = () => <MarkdownRegion source={markdownTest.source} />
