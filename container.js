import React from 'react';
import classNames from 'classnames';

export default function Container(props) {
  const ElementTag = props.as || 'div';
  return (
    <ElementTag className={classNames('container', props.className)}>
      {props.children}
    </ElementTag>
  );
}
