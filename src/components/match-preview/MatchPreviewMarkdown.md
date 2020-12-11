
#CSS

```css
.match-preview {
}
.match-info {
}
.match-name {
}
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
.team-preview-name {
}
```

#HTML
```html
<div className={style.matchPreview}>
  <TeamPreview team={playerTeam} imgMaxWidth={imgMaxWidth} style={style} isLoading={isLoading} isReverse>
    {playerChildren}
  </TeamPreview>
  <MatchInfo name={matchName} style={style}>
    {children}
  </MatchInfo>
  <TeamPreview team={opponentTeam} imgMaxWidth={imgMaxWidth} style={style} isLoading={isLoading}>
    {opponentChildren}
  </TeamPreview>
</div>
```
