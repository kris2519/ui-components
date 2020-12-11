
#CSS

```css

.btn {
  &.is-disabled {}
}
.btn-default {
}
.btn-primary {
  &:hover,
  &:active {}
}
.btn-accent {
  &:hover,
  &:active {}
}
.btn-stroke {
  &:hover,
  &:active {}
}
.btn-icon {
}
.btn-text {
}

```
#HTML

###Button
```html
<button
  type="button"
  /* $flow-disable-line */
  className={classNames(style.btn, style[`btn-${type}`], style[`btn-${size}`], styleClassName, {
    [style.isDisabled]: isDisabled
  })}
  onClick={onClick}
>
  {icon && <Svg icon={icon} styleClassName={classNames(style.btnIcon, style[`btn-icon-${icon}`])} />}
  <span className={style.btnText}>{children}</span>
</button>
```

###Button Href
```html
<a
  /* $flow-disable-line */
  className={classNames(style.btn, style[`btn-${type}`], style[`btn-${size}`], styleClassName, {
    [style.isDisabled]: isDisabled
  })}
  href={url}
  target="_blank"
  rel="noopener noreferrer"
>
  {icon && <Svg icon={icon} styleClassName={classNames(style.btnIcon, style[`btn-icon-${icon}`])} />}
  <span className={style.btnText}>{children}</span>
</a>
```
