import React from 'react';

function Modal(props) {
  const { onCancel } = props;

  React.useEffect(() => {
    function handleEscapeKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onCancel();
      }
    }

    document.addEventListener('keydown', handleEscapeKeyDown);
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, [onCancel]);

  function onCancelClick() {
    onCancel();
  }

  return (
    <div className="modal">
      <div className="modal__container">
        <header className="modal__header">
          {props.title && (
            <div className="modal__title">{props.title}</div>
          )}
          <button className="button button--icon modal__close-button" type="button" onClick={onCancelClick}>x</button>
        </header>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
