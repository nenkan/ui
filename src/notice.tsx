import React, { useState } from 'react';
import classNames from 'classnames';
import { GoAlert } from 'react-icons/go';

const NoticeDefaultProps = Object.freeze({
  floating: false,
});

interface NoticeProps {
  children: React.ReactNode; // a union of all the possible types that can be passed as children in JSX
  className: string;
  dismissable: boolean;
  floating: boolean;
  modifier: 'danger' | 'info' | 'warning' | 'success';
  onDismiss: () => void;
  showIcon: boolean;
}

function Notice(props: NoticeProps) {
  const [closed, setClosed] = useState(false);

  if (closed) {
    return null;
  }

  const onCloseClick = () => {
    setClosed(true);
    props.onDismiss && props.onDismiss();
  };

  const floating = props.floating || NoticeDefaultProps.floating;

  //todo: warning icon
  return (
    <div className={classNames('notice', {
      'notice--danger': props.modifier === 'danger',
      'notice--info': props.modifier === 'info',
      'notice--warning': props.modifier === 'warning',
      'notice--success': props.modifier === 'success',
      'notice--floating': floating
    }, props.className)}>
      {props.showIcon && <GoAlert className="notice__icon" />}
      <div className="notice__message">{props.children}</div>
      {(props.dismissable == null ? floating : props.dismissable) && (
        <button className="notice__close-button" type="button" onClick={onCloseClick} aria-label="close notice" title="close notice">X</button>
      )}
    </div>
  );
}

export default Notice;
