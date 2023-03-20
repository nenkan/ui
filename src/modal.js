import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.onCancelClick = this.onCancelClick.bind(this);
  }

  onCancelClick() {
    this.props.onCancel();
  }

  render() {
    return (
      <div className="modal">
        <div className="modal__container">
          <header className="modal__header">
            {this.props.title && (
              <div className="modal__title">{this.props.title}</div>
            )}
            <button className="button button--icon modal__close-button" type="button" onClick={this.onCancelClick}>x</button>
          </header>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
