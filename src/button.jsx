import React from 'react';
import classNames from 'classnames';

export default function Button(props) {
  return (
    <button {...props}>
      {props.children}
    </button>
  );
}
