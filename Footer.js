import React from 'react';
import classNames from 'classnames';

export default function Footer(props) {
  return (
    <footer className={classNames('footer', props.className)}>
      {props.children}
    </footer>
  );
}
