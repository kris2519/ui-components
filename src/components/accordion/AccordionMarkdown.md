#CSS

```css
.accordion {
  &.is-active {}
}

.accordion-button {}

.accordion-heading {}

.accordion-icon {}

.accordion-dd {}

.accordion-dd-content {}
```

#HTML

```html
    <ul className={style.accordionList}>
      {React.Children.map(children, (child, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className={style.item} key={index}>
          {React.cloneElement(child, {
            id: index,
            onToggleAccordion: () => (isOpen === index ? setIsOpen(false) : setIsOpen(index)),
            isAccordionActive: isOpen === index
          })}
        </li>
      ))}
    </ul>

   <div className={classNames(style.accordion, { [style.isActive]: isActive })}>
      <button
        className={style.accordionButton}
        type="button"
        onClick={() => {
          toggleAccordion();
        }}
        aria-label={isActive ? 'Hide content' : 'Show content'}
      >
        <div className={style.accordionHeading}>{heading}</div>
        {icon && <Svg styleClassName={style.accordionIcon} icon={icon} />}
      </button>
      <AnimateHeight duration={300} height={isActive ? 'auto' : 0} className={style.accordionDd}>
        <div className={style.accordionDdContent}></div>{children}
      </AnimateHeight>
    </div>
```
