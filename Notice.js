import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Notice(props) {
  const [closed, setClosed] = useState(false);

  if (closed) {
    return null;
  }

  //todo: warning icon
  return (
    <div className={classNames('notice', { 'notice--danger': props.modifier === 'danger', 'notice--floating': props.floating }, props.className)}>
      <div className="notice__message">{props.children}</div>
      {props.dismissable && (
        <button className="notice__close-button" type="button" onClick={() => setClosed(true)}>X</button>
      )}
    </div>
  )
}

Notice.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  floating: PropTypes.bool,
  modifier: PropTypes.oneOf(['danger']),
};

Notice.defaultProps = {
  dismissable: false,
  floating: false,
};

export default Notice;
