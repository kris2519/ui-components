#CSS

```css
.pagination {}

.pagination-item {
  &.is-active {}

  &.is-disabled {}
}

.pagination-item-link { 
	&.mod-arrow {} 
	&.mod-gap {}
}

.pagination-icon {}
```

#HTML

```html
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
```

