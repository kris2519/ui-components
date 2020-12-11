
#CSS

```css
.team-preview {
}
.team-preview-reverse {
}
.img-holder {
}
.img {
}
.img-holder-loader {
}
.team-preview-info {
}
.team-preview-data {
}
.team-preview-country {
}
.flag {
}
.team-preview-country-name {
}
.team-preview-name {
}
```

#HTML
```html
<div className={isReverse ? style.teamPreviewReverse : style.teamPreview}>
  <Img isLoading={isLoading} img={team.img} maxWidth={imgMaxWidth} style={style} alt={team.name} />
  <div className={style.teamPreviewInfo}>
    <div className={style.teamPreviewData}>
      {team.country && (
        <div className={style.teamPreviewCountry}>
          {team.country}
          {team.countryName && <p className={style.teamPreviewCountryName}>{team.countryName}</p>}
        </div>
      )}
      <p className={style.teamPreviewName}>{team.name}</p>
    </div>
    {children}
  </div>
</div>
```
