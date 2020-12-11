#CSS

```css
.section {
  &.mod-styleMod {}
}

.section-nav {
  &.mod-top {}
  &.mod-bottom {}
}
```

#HTML

```html
/* main */
<section className={classNames(style.section, style[`mod-${styleMod}`])}>{children}</section>

/* nav */
<div className={classNames(style.sectionNav, style[`mod-${orientation}`])}>{children}</div>
```
