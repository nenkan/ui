import React from 'react';
import { Notice } from '../src';
import '@nenkan/css/notice.scss';

export default {
  title: 'Notice',
  component: Notice,
};

export const NoticeExample = () => (
  <Notice>Title</Notice>
);

export const NoticeDangerExample = () => (
  <Notice modifier="danger">Danger</Notice>
);

export const NoticeDismissableExample = () => (
  <Notice dismissable>Dismissable</Notice>
);

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
