import React from 'react';
import Notice from '../../../src/notice';
import '@nenkan/css/notice.scss';

export default {
  title: 'Notice',
  component: Notice,
  args: {
    className: '',
    children: 'Title',
    dismissable: false,
    floating: false,
    showIcon: false,
  },
};

export const NoticeExample = {};

export const NoticeDangerExample = {
  args: {
    modifier: 'danger',
    children: 'Danger',
  },
};

export const NoticeDismissableExample = {
  args: {
    dismissable: true,
    children: 'Dismissable',
  },
};

export const NoticeFloatingDismissableExample = () => (
  <>
    <div>This is initially hidden by the notice</div>
    <Notice dismissable floating>This is a really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, long text</Notice>
  </>
);

export const NoticeFloatingDismissableByDefaultExample = () => (
  <>
    <div>This is initially hidden by the notice</div>
    <Notice floating>Floating is dismissable by default unless opted out</Notice>
  </>
);
