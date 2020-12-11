#CSS

```css
.privacy-notification-holder {
}

.privacy-notification {
}

.privacy-notification-title {
}

.privacy-notification-text {
}

.privacy-notification-nav {
}

.privacy-notification-btn {
}
```

#HTML

```html
display && (
      <div className={style.privacyNotificationHolder}>
        <div className={style.privacyNotification}>
          <p className={style.privacyNotificationTitle}>{title}</p>
          <p className={style.privacyNotificationText}>{description}</p>
          <p className={style.privacyNotificationNav}>
            <Button styleClassName={style.privacyNotificationBtn} onClick={buttonClickHandler}>
              {btnAccept}
            </Button>
            <ButtonHref url={linkMoreUrl} type="stroke">
              {linkMore}
            </ButtonHref>
          </p>
        </div>
      </div>
    )
```
