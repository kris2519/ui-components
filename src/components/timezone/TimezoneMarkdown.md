#CSS

```css
.timezones {
}

.current-timezone {
  &.is-active {
  }
}

.current-timezone-icon {
}

.current-timezone-arrow {
}

.current-timezone-time {
}

.timezones-dd {
  &.is-active {
  }
}

.timezones-list {
}

.timezones-item {
}

.timezones-item-title {
}

.timezones-item-val {
}
```

```html
	<div className={classNames(style.timezones, styleClassName)} ref={timezoneRef}>
		<button
			type="button"
			className={classNames(style.currentTimezone, { [style.isActive]: isActiveDd })}
			onClick={toggleDd}
		>
			{decoratorIcon && <Svg icon={decoratorIcon} styleClassName={style.currentTimezoneIcon} />}
			<span className={style.currentTimezoneTime}>{formatCurrentTime(currentTimezoneName)}</span>
			{arrowIcon && <Svg icon={arrowIcon} styleClassName={style.currentTimezoneArrow} />}
		</button>
		<div className={classNames(style.timezonesDd, { [style.isActive]: isActiveDd })}>
			<div className={style.timezonesList}>
				{timezones.map((tz, index) => (
					<button
						type="button"
						className={classNames(style.timezonesItem, {
							[style.isActive]: tz.zone === currentTimezoneName
						})}
						onClick={() => {
							toggleActiveTz(tz.zone);
						}}
						// eslint-disable-next-line react/no-array-index-key
						key={`${tz.zone}${index}`}
					>
						<span className={style.timezonesItemTitle}>{tz.name}</span>
						<span className={style.timezonesItemVal}>{formatCurrentTime(tz.zone)}</span>
					</button>
				))}
			</div>
		</div>
	</div>
```
