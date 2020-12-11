#CSS

```css
.grid {}

.grid-item {}

```

#HTML

```html
    <ul className={style.grid}>
      {React.Children.map(children, (child, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className={style.gridItem} key={index}>
          {child}
        </li>
      ))}
    </ul>
```
