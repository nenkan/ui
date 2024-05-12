import React from 'react';
import classNames from 'classnames';

export default function Header(props) {
  return (
    <header className={classNames('header', props.className)}>
      <div className="container header__inner">
        {props.children}
      </div>
    </header>
  );
}
