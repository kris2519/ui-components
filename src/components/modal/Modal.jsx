// @flow

import React, { useRef } from 'react';
import ReactModal from 'react-modal';
import useClickOutside from 'hooks/useClickOutside';

type PropsType = {
  /** дочерний элемент */
  children: any,
  /** элемент шапки */
  headline: any,
  /** boolean значение, указывающее на то, или попап открыт */
  isOpen: boolean,
  /** callback на закрытие попапа */
  onCloseModal: () => void
};

function Modal({ children, headline, isOpen, onCloseModal, style }: PropsType) {
  const modalRef = useRef();

  useClickOutside(modalRef, () => onCloseModal());

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      className={style.modalWrapper}
      overlayClassName={style.modalOverlay}
      appElement={document.getElementById('app')}
    >
      <div className={style.modal} ref={modalRef}>
        <div className={style.modalHeadlineHolder}>
          <div className={style.modalHeadline}>
            <p className={style.modalHeadlineTitle}>{headline}</p>
            <button type="button" className={style.modalClose} aria-label="close-modal" onClick={onCloseModal}>
              <svg
                className={style.modalCloseIco}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
          </div>
        </div>
        <div className={style.modalContent}>{children}</div>
      </div>
    </ReactModal>
  );
}

export default Modal;
