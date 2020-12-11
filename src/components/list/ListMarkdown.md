#CSS

```css
.list {}

.item {}
```

#HTML

```html
	<ul className={style.list}>
		{React.Children.map(children, (child, index) => (
			// eslint-disable-next-line react/no-array-index-key
			<li className={style.item} key={index}>
				{React.cloneElement(child, { style })}
			</li>
		))}
	</ul>
```
