import React from 'react';
import classNames from 'classnames';

export default function Textarea(props) {
  const { className, ...otherProps } = props;

  return (
    <textarea
      className={classNames('input', className)}
      rows="3"
      {...otherProps}
    />
  );
}