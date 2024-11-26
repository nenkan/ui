import React from 'react';

export default function Checkbox(props) {
  const { className, label, ...otherProps } = props;

  return (
    <label className={className}>
      <input
        type="checkbox"
        {...otherProps}
      />
      {label}
    </label>
  );
}
