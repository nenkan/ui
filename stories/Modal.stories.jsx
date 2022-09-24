import Modal from "../Modal"
import '@nenkan/css/modal.scss';

export default {
  title: 'Modal'
}

export const ModalExample = () => {
  return (
    <Modal title="Modal title" onCancel={() => {}}>
      Modal content
    </Modal>
  )
}