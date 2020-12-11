#CSS

```css
.table-holder {
}

.table-scroll {
}

.table {
}

.table-header {
}

.table-header-cell {
  &.mod-media-fixed {
  }
}

.table-header-cell-text {
  &.mod-highlighted {
  }
}

.table-row {
}

.table-cell {
  &.mod-media-fixed {
  }
}

.table-cell-text {
  &.mod-highlighted {
  }
}
```

```html
<div className="{style.tableHolder}">
  <div className="{style.tableScroll}">
    <div className="{style.table}">
      <div className="{style.tableHeader}">
        <div className="{style.tableHeaderCell}">
          <span className="{style.tableHeaderCellText}">
            {cell}
          </span>
          <span className="{style.tableHeaderCellText}">
            {cell}
          </span>
          || {cell}
        </div>
      </div>
      <div className="{style.tableRow}">
        <div className="{style.tableCell}">
          <span className="{style.tableCellText}">
            {cell}
          </span>
          <span className="{style.tableCellText}">
            {cell}
          </span>
          || {cell}
        </div>
      </div>
    </div>
  </div>
</div>
```
