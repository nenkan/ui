import React from 'react';
import PropTypes from 'prop-types';

class ErrorDialog extends React.Component {
  render () {
    return this.props.message && (
      <div className="error-dialog">
        {this.props.message}
        {this.props.onDismiss && (
          <button className="error-dialog__close-button" type="button" onClick={this.props.onDismiss}>
            Close
          </button>
        )}
      </div>
    );
  }
}

ErrorDialog.propTypes = {
  message: PropTypes.string,
  onDismiss: PropTypes.func,
};

export default ErrorDialog;
