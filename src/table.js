import React from 'react';
import classNames from 'classnames';

export default function Table(props) {

  return (
    <table className={classNames('table', props.className)}> 
      {props.children}
    </table>

  );

}
