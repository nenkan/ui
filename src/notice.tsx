import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { GoAlert } from 'react-icons/go';

const NoticeDefaultProps = Object.freeze({
  floating: false,
});

function Notice(props) {
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

Notice.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  floating: PropTypes.bool,
  modifier: PropTypes.oneOf(['danger', 'success', 'warning']),
  onDismiss: PropTypes.func,
  showIcon: PropTypes.bool,
};

export default Notice;
