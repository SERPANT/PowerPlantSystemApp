import React, { ReactNode } from 'react';

import './Modal.css';

interface ModalProps {
  open: boolean;
  title: string;
  modalContent?: ReactNode;
  onClose: () => void;
}

export function Modal(props: ModalProps) {
  const { open, title, modalContent, onClose } = props;

  if (!open) return null;

  return (
    <div id='myModal' className='modal'>
      <div className='modal-content'>
        <button className='close' onClick={onClose}>
          &times;
        </button>
        <h3>{title}</h3>
        <hr />
        <div>{modalContent}</div>
      </div>
    </div>
  );
}

export default Modal;
