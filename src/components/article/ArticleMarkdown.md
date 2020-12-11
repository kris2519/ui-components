#CSS

```css
.article {}
.article-info {}
.article-title {}
.article-description {}
```

#HTML

```html
<article className={style.article}>
  <p className={classNames(style.articleInfo, loadingClassName)}>{additionalInfo}</p>
  <h1 className={classNames(style.articleTitle, loadingClassName)}>{title}</h1>
  {hasFabula && <p className={classNames(style.articleDescription, loadingClassName)}>{description}</p>}
  <div
    className={classNames('article-simple-text', { 'loading-simple-text': isLoading }, loadingClassName)}
    id="articleSimpleText"
    dangerouslySetInnerHTML={{ __html: body }}
  />
</article>
```
