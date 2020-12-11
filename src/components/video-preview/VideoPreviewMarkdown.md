#CSS

```css
.video-preview {}

.video-preview-img-holder {}

.img-holder {}

.img {}

.img-holder-loader {}

.video-preview-icon-holder {}

.video-preview-icon {}

.video-preview-duration {}

.video-preview-data {}

.video-preview-date {}

.video-preview-discipline {}

.video-preview-title {}
```

#HTML

```html
<div className="{style.videoPreview}">
  <div className="{style.videoPreviewImgHolder}">
    <img isLoading="{isLoading}" img="{img}" alt="{title}" maxWidth="{imgMaxWidth}" style="{style}" />
    <span className={style.videoPreviewIconHolder}>
      <Svg styleClassName={style.videoPreviewIcon} icon={videoIcon} />
    </span>
  </div>
  {duration && <span className="{style.videoPreviewDuration}">{duration}</span>}
  <p className="{style.videoPreviewData}">
    {publishedAt && <span className="{style.videoPreviewDate}">{publishedAt}</span>} {discipline &&
    <span className="{style.videoPreviewDiscipline}">{discipline}</span>}
  </p>
  <p className="{style.videoPreviewTitle}">{title}</p>
</div>
```
