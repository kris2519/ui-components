#CSS

```css
.social {
  &.mod-fb { }

  &.mod-twitter {}

  &.mod-twitch {}

  &.mod-vk {}

  &.mod-youtube {}

  &.mod-instagram {}

  &.mod-reddit {}

  &.mod-discord {}

  &.mod-site {}

  &.mod-telegram {}
}

.social-icon {}
```

#HTML

###Social link

```html
<a href="{url}" className="{classNames(style.social, style[`mod-${icon}`])}" target="_blank" rel="noreferrer noopener">
  <svg styleClassName={style.socialIcon} icon="{icon}" />
  {children}
</a>
```

###Social button

```html
<button type="button" className="{classNames(style.social, style[`mod-${icon}`])}" onClick="{onClick}">
  <svg styleClassName={style.socialIcon} icon="{icon}" />
  {children}
</button>
```
