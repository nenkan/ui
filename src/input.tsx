import React from 'react';
import classNames from 'classnames';

export default function Input(props) {
  const { className, ...otherProps } = props;

  return (
    <input
      className={classNames('input', className)}
      {...otherProps}
    />
  );
}
