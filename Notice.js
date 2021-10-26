import React from 'react';
import classNames from 'classnames';

export default function Notice(props) {
  return (
    <div className={classNames('panel', { 'panel--danger': props.error })}>
      {props.message || props.children}
    </div>
  )
}
