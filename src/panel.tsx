import React from 'react';

export default function Panel(props) {
  let className = props.className || '';
  if (props.modifier == 'danger') {
    className = ('panel--danger ' + className).trim(); 
  }
  else if (props.modifier == 'warning') {
    className = ('panel--warning ' + className).trim(); 
  }
  
  return (
    <div className={`panel ${className}`}>{props.children}</div>
  );
}
