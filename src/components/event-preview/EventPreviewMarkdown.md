#CSS

```css
.event-preview {& .mod-someStatus}
.event-preview-img {}
.img-holder {}
.img-holder-loader {}
.event-preview-data {}
.event-preview-info {}
.event-preview-date {}
.event-preview-discipline {}
.event-preview-title {}
.event-preview-status {}
.event-preview-additional-info {}
.event-preview-place {}
.event-preview-prize {}
```

#HTML

```html
<div className="{classNames(style.eventPreview," style[`mod-${status}`])}>
  <div className="{style.eventPreviewImg}">
    <img isLoading="{isLoading}" img="{img}" alt="{title}" maxWidth="{imgMaxWidth}" style="{style}" />
  </div>
  <div className="{style.eventPreviewData}">
    <p className="{style.eventPreviewInfo}">
      {date && <span className="{style.eventPreviewDate}">{date}</span>} {discipline &&
      <span className="{style.eventPreviewDiscipline}">{discipline}</span>}
    </p>
    <p className="{style.eventPreviewTitle}">{title}</p>
    {statusText &&
    <p className="{style.eventPreviewStatus}">statusText</p>
    }
    <div className="{style.eventPreviewAdditionalInfo}">
      {place &&
      <p className="{style.eventPreviewPlace}">{place}</p>
      }
      <p className="{style.eventPreviewPrize}">{prize}</p>
    </div>
  </div>
</div>
```
