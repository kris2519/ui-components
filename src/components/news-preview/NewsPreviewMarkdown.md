
#CSS

```css
.news-preview {}

.news-preview-img {}

.img-holder {}

.img {}

.img-holder-loader {}

.news-video-icon-holder {}

.news-video-icon {}

.news-preview-info {}

.news-preview-data {}

.news-preview-date {}

.news-preview-discipline {}

.news-preview-title {}

.news-preview-description {}

.news-preview-link {}

```

#HTML
```html
    <div className={style.newsPreview}>
      {hasImg && (
        <div className={style.newsPreviewImg}>
          <Img isLoading={isLoading} img={img} alt={title} maxWidth={imgMaxWidth} style={style} />
          {isVideo && (
            <div className={style.newsVideoIconHolder}>
              <Svg styleClassName={style.newsVideoIcon} icon={videoIcon} />
            </div>
          )}
        </div>
      )}
      <div className={style.newsPreviewInfo}>
        <p className={classNames(style.newsPreviewData, loadingClassName)}>
          {publishedAt && <span className={style.newsPreviewDate}>{publishedAt}</span>}
          {discipline && <span className={style.newsPreviewDiscipline}>{discipline}</span>}
        </p>
        <p className={classNames(style.newsPreviewTitle, loadingClassName)}>{title}</p>
        {hasFabula && <p className={classNames(style.newsPreviewDescription, loadingClassName)}>{description}</p>}
        {hasDescription && (
          <p
            className={classNames(style.newsPreviewDescription, loadingClassName)}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {children}
      </div>
    </div>
```


