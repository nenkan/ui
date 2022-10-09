import React from 'react';
import '@nenkan/css/modal.scss';

import { Modal } from '..';

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
