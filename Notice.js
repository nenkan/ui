import React from 'react';
import classNames from 'classnames';

export default function Notice(props) {
  return (
    <div className={classNames('panel', { 'panel--danger': props.error }, props.className)}>
      {props.message || props.children}
    </div>
  )
}
