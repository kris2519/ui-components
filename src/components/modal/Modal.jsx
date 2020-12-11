// @flow

import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

type PropsType = {
  /** дочерний элемент */
  children: any,
  /** элемент шапки */
  headline: any,
  /** boolean значение, указывающее на то, или попап открыт */
  isOpen: boolean,
  /** стили (CSS-модули) */
  style: {},
  /** Функция после открытия попапа. */
  onAfterOpen: () => void,
  /** Функция после закрытия попапа. */
  onAfterClose: () => void,
  /** Function после закрытия попапа (при клике на overlay или ESC) */
  onRequestClose: () => void,
  /** Boolean indicating if the modal should be focused after render. */
  shouldFocusAfterRender: boolean,
  /** Boolean - закрытие попапа на esc */
  shouldCloseOnEsc: boolean,
  /** Boolean - закрытие попапа при клике на overlay */
  shouldCloseOnOverlayClick: boolean,
  /** Content ref callback. */
  contentRef: any,
  /** Дополнительные aria-аттрибуты */
  aria: {},
  /** id для div с контентом попапа */
  id: string
};

function Modal({
  children,
  headline,
  isOpen,
  style = {},
  shouldCloseOnOverlayClick = true,
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  shouldFocusAfterRender = false,
  shouldCloseOnEsc = true,
  contentRef,
  aria,
  id
}: PropsType) {
  const [isModalOpen, setValue] = useState(isOpen);

  useEffect(() => {
    setValue(isOpen);
  }, [isOpen]);

  function handleRequestCloseModal() {
    setValue(false);
    onRequestClose();
  }

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleRequestCloseModal}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      id={id}
      shouldFocusAfterRender={shouldFocusAfterRender}
      shouldCloseOnEsc={shouldCloseOnEsc}
      contentRef={contentRef}
      aria={aria}
      className={style.modalWrapper}
      overlayClassName={style.modalOverlay}
    >
      <div className={style.modalHeadlineHolder}>
        <div className={style.modalHeadline}>
          <p className={style.modalHeadlineTitle}>{headline}</p>
          <button type="button" className={style.modalClose} aria-label="close-modal" onClick={() => setValue(false)}>
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
    </ReactModal>
  );
}

export default Modal;
