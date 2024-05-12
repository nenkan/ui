import React from 'react';
import Modal from '../../../src/modal';
import '@nenkan/css/modal.scss';

export default {
  title: 'Modal'
};

export const ModalExample = () => {
  const [hidden, setHidden] = React.useState(false);

  if (hidden) {
    return null;
  }

  return (
    <Modal onCancel={() => setHidden(true)} title="Lorem Ipsum">
      <div>
        This is the modal content.
      </div>
    </Modal>
  );
};
