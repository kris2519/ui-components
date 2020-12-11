#CSS

```css
.loader-box {}

.loader-svg {}
```


#HTML
```html
<div className={style.loaderBox}>
	<svg width="200" height="200" viewBox="0 0 200 200" stroke="var(--accent-color)" className={style.loaderSvg}>
		<g>
			<circle cx="100" cy="100" r="30" strokeOpacity="0.5" strokeWidth="5" fill="none" />
			<circle cx="100" cy="100" r="30" strokeWidth="5" strokeDasharray="30 160" fill="none">
				<animateTransform
					attributeName="transform"
					begin="0s"
					dur="1s"
					type="rotate"
					from="0 100 100"
					to="360 100 100"
					repeatCount="indefinite"
				/>
			</circle>
		</g>
	</svg>
</div>
```
