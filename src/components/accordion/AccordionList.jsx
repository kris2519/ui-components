// @flow

import React, { useState } from 'react';

type PropsType = {
  /** дочерний элемент */
  children: any,
  /** стили (CSS-модули) */
  style: {}
};

function AccordionList({ children, style = {} }: PropsType) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul className={style.accordionList}>
      {React.Children.map(
        children,
        (child, index) =>
          child != null && (
            // eslint-disable-next-line react/no-array-index-key
            <li className={style.accordionItem} key={index}>
              {React.cloneElement(child, {
                id: index,
                onToggleAccordion: () => (isOpen === index ? setIsOpen(false) : setIsOpen(index)),
                isAccordionActive: isOpen === index
              })}
            </li>
          )
      )}
    </ul>
  );
}

export default AccordionList;
