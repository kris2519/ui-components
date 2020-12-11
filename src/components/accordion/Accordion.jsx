// @flow

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import Svg from 'components/svg/Svg';

type PropsType = {
  /** дочерний элемент */
  children: any,
  /** название */
  heading: any,
  /** иконка */
  icon: string,
  /** callback функция на отображения/скрытия контента */
  onToggleAccordion: () => void,
  /** boolean значение, для отображения/скрытия контента  */
  isAccordionActive: boolean,
  /** вспомогательный атрибут, для обозначения отображения/скрытия контента */
  ariaLabel: {
    hide: string,
    show: string
  },
  /** стили (CSS-модули) */
  style: {}
};

function Accordion({
  heading,
  children,
  style = {},
  icon = 'arrow-down',
  onToggleAccordion = null,
  isAccordionActive = false,
  ariaLabel = { hide: 'Hide info', show: 'Show info' }
}: PropsType) {
  const [isActive, setActiveState] = useState(isAccordionActive);

  useEffect(() => {
    setActiveState(isAccordionActive);
  }, [isAccordionActive]);

  // eslint-disable-next-line consistent-return
  function toggleAccordion() {
    setActiveState(!isActive);

    if (typeof onToggleAccordion === 'function') {
      return onToggleAccordion();
    }
  }

  return (
    <div className={classNames(style.accordion, { [style.isActive]: isActive })}>
      <button
        className={style.accordionButton}
        type="button"
        onClick={toggleAccordion}
        aria-label={isActive ? ariaLabel.hide : ariaLabel.show}
      >
        <div className={style.accordionHeading}>{heading}</div>
        {icon && <Svg styleClassName={style.accordionIcon} icon={icon} />}
      </button>
      <AnimateHeight duration={300} height={isActive ? 'auto' : 0} className={style.accordionDd}>
        <div className={style.accordionDdContent}>{children}</div>
      </AnimateHeight>
    </div>
  );
}

export default Accordion;
