import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '@nenkan/css/floating-notice.scss';

class FloatingNotice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: false,
    };

    this.onCloseClick = this.onCloseClick.bind(this);
  }

  onCloseClick() {
    this.setState({
      closed: true
    });
  }

  render() {
    if (this.state.closed) {
      return null;
    }

    //todo: warning icon
    return (
      <div className={classNames('floating-notice', { 'floating-notice--danger': this.props.danger })}>
        <div className="floating-notice__message">{this.props.children}</div>
        <button className="floating-notice__close-button" type="button" onClick={this.onCloseClick}>X</button>
      </div>
    );
  }
}

FloatingNotice.propTypes = {
  children: PropTypes.node,
  danger: PropTypes.bool,
};

FloatingNotice.defaultProps = {
  danger: false
};

export default FloatingNotice;
