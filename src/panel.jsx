import React from 'react';

export default function Panel(props) {
  var className;
  if (props.modifier == 'danger') {
    className = 'panel--danger'; 
  }
  else if (props.modifier == 'warning') {
    className = 'panel--warning'; 
  }
  else {
    className = ''; 
  }
  
  return (
    <div className={`panel ${className}`}>{props.children}</div>
  );
}
