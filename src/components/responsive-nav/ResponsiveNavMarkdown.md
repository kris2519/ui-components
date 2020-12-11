#CSS

```css
.nav {}

.nav-item {
  &:hover {}
  &.is-invisible {}
  
  .nav-link {
    &:hover {}
    &.is-active {}
  }
}

.dd-nav {
  &:hover {}
  &.is-active {}
  &.is-invisible {}
}

.dd-nav-btn {}

.dd-nav-btn-ico {}

.dd-nav-list-holder {}

.dd-nav-list {}

.dd-nav-item {
  .nav-link {}
  span.nav-link {}
}

```


#HTML

```html
<nav className={style.nav} ref={navWrapperRef}>
	{state.nav.length > 0 &&
		React.Children.map(children, (child, index) => (
			<div
				// eslint-disable-next-line react/no-array-index-key
				key={index}
				className={classNames(style.navItem, {
					[style.isInvisible]: typeof state.nav[index].visible === 'boolean' && !state.nav[index].visible
				})}
				ref={navRef.current[index]}
			>
				{child}
			</div>
		))}
	<div
		className={classNames(style.ddNav, { [style.isInvisible]: !(state.ddNav.length > 0) })}
		ref={ddNavWrapperRef}
	>
		<button className={style.ddNavBtn} type="button">
			<i className={style.ddNavBtnIco} />
		</button>
		<div className={style.ddNavListHolder}>
			<div className={style.ddNavList}>
				{state.ddNav.length > 0 &&
					React.Children.map(
						children,
						(child, index) =>
							index >= state.nav.length - state.ddNav.length && (
								// eslint-disable-next-line react/no-array-index-key
								<div key={index} className={style.ddNavItem}>
									{children[index]}
								</div>
							)
					)}
			</div>
		</div>
	</div>
</nav>
```
