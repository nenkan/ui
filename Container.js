import React from 'react';
import classNames from 'classnames';

export default function Container(props) {
  return (
    <div className={classNames("container", props.className)}>
      {props.children}
    </div>
  )
}
