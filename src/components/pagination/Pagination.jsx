// @flow

import React from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';

type PropsType = {
  /** текущий номер страницы */
  pageNum?: number,
  /** количество страниц */
  total: number,
  /** callback на смену номера страницы */
  onPageChange: () => void
};

function Pagination({
  total,
  pageNum = 'undefined',
  marginPagesDisplayed,
  pageRangeDisplayed,
  onPageChange,
  style,
  previousLabel,
  nextLabel
}: PropsType) {
  return (
    total > 1 && (
      <ReactPaginate
        pageCount={total}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        forcePage={pageNum}
        containerClassName={style.pagination}
        pageClassName={style.paginationItem}
        pageLinkClassName={style.paginationItemLink}
        breakClassName={style.paginationItem}
        previousClassName={classNames(style.paginationItem, style.modPrev)}
        previousLinkClassName={classNames(style.paginationItemLink, style.modArrow)}
        nextLinkClassName={classNames(style.paginationItemLink, style.modArrow)}
        nextClassName={classNames(style.paginationItem, style.modNext)}
        activeClassName={style.isActive}
        disabledClassName={style.isDisabled}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        onPageChange={onPageChange}
      />
    )
  );
}

export default Pagination;
