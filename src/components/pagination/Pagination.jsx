// @flow

import React from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import Svg from 'components/svg/Svg';

type PropsType = {
  /** текущий номер страницы */
  pageNum?: number,
  /** количество страниц */
  total: number,
  /** callback на смену номера страницы */
  onPageChange: () => void,
  /** CSS-модули */
  style: {},
  /** иконка предыдущей страницы */
  previousIcon: string,
  /** иконка следующей страницы */
  nextIcon: string
};

function Pagination({
  total,
  pageNum = 1,
  marginPagesDisplayed = 5,
  pageRangeDisplayed = 3,
  onPageChange,
  style = {},
  previousIcon = 'arrow-left',
  nextIcon = 'arrow-right'
}: PropsType) {
  return (
    total > 1 && (
      <ReactPaginate
        pageCount={total}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        forcePage={pageNum - 1}
        containerClassName={style.pagination}
        pageClassName={style.paginationItem}
        pageLinkClassName={style.paginationItemLink}
        breakClassName={classNames(style.paginationItem, style.modGap)}
        breakLinkClassName={classNames(style.paginationItemLink, style.modGap)}
        previousClassName={classNames(style.paginationItem, style.modPrev)}
        previousLinkClassName={classNames(style.paginationItemLink, style.modArrow)}
        nextLinkClassName={classNames(style.paginationItemLink, style.modArrow)}
        nextClassName={classNames(style.paginationItem, style.modNext)}
        activeClassName={style.isActive}
        disabledClassName={style.isDisabled}
        previousLabel={<Svg styleClassName={style.paginationIcon} icon={previousIcon} />}
        nextLabel={<Svg styleClassName={style.paginationIcon} icon={nextIcon} />}
        onPageChange={(page: number = 0) => {
          onPageChange(page.selected + 1);
        }}
      />
    )
  );
}

export default Pagination;
