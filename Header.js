import React from 'react';

export default function Header(props) {
  return (
    <header className={`header ${props.className}`}>
      <div className="container header__inner">
        {props.children}
      </div>
    </header>
  );
}
