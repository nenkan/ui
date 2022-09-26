import React from 'react'

export default function Panel(props) {
  var className
  if (props.modifier == 'danger') {
    className = 'panel--danger' 
  } else {
    className = '' 
  }
  
  return (
    <div className={`panel ${className}`}>{props.children}</div>
  )
}
