#CSS

```css
/* stylelint-disable no-descending-specificity */

.tabs {}

.tab {}

.tab-btn {
  &.is-active {}
}

.tab-text {}

```

#HTML

```html
<ul className={style.tabs}>
    <li className={style.tab}>
      <button
        type="button"
        onClick={onTabClick}
        className={classNames(style.tabBtn, { [style.isActive]: isActive }, { [style.isEmpty]: isEmpty })}
      >
        <span className={style.tabText}>{children}</span>
      </button>
    </li>
</ul>
```
