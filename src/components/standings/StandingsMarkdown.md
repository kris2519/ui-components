
#CSS

```css
.standings {}

.standings-nav {}

.standings-content {}

.standings-grid {}

.standings-grid-content {}

.standings-grid-title {}

.standings-grid-round {}

.standings-grid-round-title {}

.standings-grid-round-content {}

.standings-grid-item-holder {
  &.mod-stretched {}
  &.mod-pair {}
}
```

```html
	<div className={style.standings}>
		{nav && <div className={style.standingsNav}>{nav}</div>}
		<div className={style.standingsContent}>{children}</div>
	</div>
    
	<div className={style.standingsGrid}>
		{title && <p className={style.standingsGridTitle}>{title}</p>}
		<div className={style.standingsGridContent}>
			{React.Children.map(grid, (round, index) =>
				React.cloneElement(
					{ round },
					{
						orientation:
							index < grid[index].length && grid.length !== index + 1 && grid[index].length > grid[index + 1].length
								? 'pair'
								: 'straight',
						isStretched:
							grid[index - 1] !== null &&
							typeof grid[index - 1] === 'object' &&
							grid[index - 1].length === grid[index].length * 2
					}
				)
			)}
		</div>
	</div>
	
	<div className={style.standingsGridRound}>
		{title && (
			<p className={classNames(style.standingsGridRoundTitle, { [style[`mod-${titleMod}`]]: titleMod })}>{title}</p>
		)}
		<div className={style.standingsGridRoundContent}>
			{React.Children.map(round, item => (
				<div
					className={classNames(style.standingsGridItemHolder, style[`mod-${orientation}`], {
						[style.modStretched]: isStretched
					})}
				>
					{item}
				</div>
			))}
		</div>
	</div>
```
