#CSS

```css
.img-holder {}

.img {}

.img-holder-loader {}

```

#HTML

```html
	<picture className={style.imgHolder}>
		{!isLoading ? (
			<React.Fragment>
				{maxWidth.small && (
					<source srcSet={`${img.small} 1x, ${img.medium} 2x`} media={`(max-width: ${maxWidth.small})`} />
				)}
				{maxWidth.medium && (
					<source srcSet={`${img.medium} 1x, ${img.big} 2x`} media={`(max-width: ${maxWidth.medium})`} />
				)}
				{maxWidth.large && (
					<source srcSet={`${img.big} 1x, ${img.large} 2x`} media={`(max-width: ${maxWidth.large})`} />
				)}
				<img className={style.img} src={img.big} alt={alt} />
			</React.Fragment>
		) : (
			<i className={style.imgHolderLoader} />
		)}
	</picture>
```
