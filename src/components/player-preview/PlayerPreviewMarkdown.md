
#CSS

```css
.player-preview {
}
.player-preview-reverse {
}
.img-holder {
}
.img {
}
.img-holder-loader {
}
.player-preview-info {
}
.player-preview-data {
}
.player-preview-description {
}
.flag {
}
.player-preview-nickname {
}
.player-preview-name {
}
```

#HTML
```html
<div className={isReverse ? style.playerPreviewReverse : style.playerPreview}>
  <Img isLoading={isLoading} img={player.img} maxWidth={imgMaxWidth} style={style} alt={player.nickname} />
  <div className={style.playerPreviewInfo}>
    <div className={style.playerPreviewData}>
      <div className={style.playerPreviewDescription}>
        {player.country}
        <p className={style.playerPreviewNickname}>{player.nickname}</p>
      </div>
      {player.name && <p className={style.playerPreviewName}>{player.name}</p>}
    </div>
    {children}
  </div>
</div>
```
