
#CSS

```css

.dropdown {
  &:hover {}
  &.is-active {}
}

.dropdown-heading {}

.dropdown-title {}

.dropdown-content-holder {}

.dropdown-content {}

```
#HTML

```html
<div
  className={classNames(style.dropdown, { [style.isActive]: isActiveDd })}
  onMouseEnter={isShowOnHover ? toggleDd : null}
  onMouseLeave={isShowOnHover ? toggleDd : null}
  ref={dropdownRef}
>
  <button type="button" className={style.dropdownHeading} onClick={isShowOnHover ? null : toggleDd}>
    <p className={style.dropdownTitle}>{title}</p>
  </button>
  <div className={style.dropdownContentHolder}>
    <div className={style.dropdownContent}>{children}</div>
  </div>
</div>
```
