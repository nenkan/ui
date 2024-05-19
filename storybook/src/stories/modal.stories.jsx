import React from 'react';
import Modal from '../../../src/modal';
import '@nenkan/css/modal.scss';

export default {
  title: 'Modal',
  component: Modal,
  args: {
    children: (
      <div>
        This is the modal content.
      </div>
    ),
    title: 'Lorem Ipsum',
  },
  render: (props) => {
    const [hidden, setHidden] = React.useState(false);

    if (hidden) {
      return null;
    }

    return (
      <Modal {...props} onCancel={() => setHidden(true)} />
    );
  },
};

export const ModalExample = {};
