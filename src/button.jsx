import React from 'react';
import classNames from 'classnames';

export default function Button(props) {
  return (
    <button
      {...props}
      className={classNames('button', {
        'button--primary': props.modifier === 'primary',
        'button--secondary':  props.modifier === 'secondary',
        'button--danger':  props.modifier === 'danger',
      }, props.className)}
    >
      {props.children}
    </button>
  );
}
