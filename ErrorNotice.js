import React from 'react';
import classNames from 'classnames';

export default function ErrorNotice(props) {
  return (
    <div className={classNames('notice notice--danger', props.className)}>
      There was a problem{props.action ? ` ${props.action}` : ''}:<br/>
      {props.message}
    </div>
  );
}
