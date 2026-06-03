import React from 'react';
import classNames from 'classnames';
import Container from './container.js';

export default function Header(props) {
  return (
    <header className={classNames('header', props.className)}>
      <Container
        className={classNames('header__inner', props.innerClassName)}
        variant={props.containerVariant || 'fixed'}
      >
        {props.children}
      </Container>
    </header>
  );
}
