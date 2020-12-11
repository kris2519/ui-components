// @flow

import React, { useEffect } from 'react';
import classNames from 'classnames';
import setLoadingClassname from 'utils/setLoadingClassname';

type PropsType = {
  /** заголовок */
  title: string,
  /** дополнительная информация (время публикации, автор, дисциплина и т.д.) */
  additionalInfo: any,
  /** первый абзац или фабула (опционально) */
  description: any,
  /** отображение фабулы */
  hasFabula: boolean,
  /** контент */
  body: string,
  /** лоадер для загрузки компонента */
  isLoading: boolean,
  /** стили (CSS-модули) */
  style: any
};

function Article({
  title,
  additionalInfo,
  hasFabula = false,
  description,
  body,
  isLoading = false,
  style = {}
}: PropsType) {
  useEffect(() => {
    getElementInsideContainer();
  });

  function getElementInsideContainer() {
    const iframe = document.getElementById('articleSimpleText').getElementsByTagName('iframe');
    if (iframe.length > 0) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < iframe.length; i++) {
        if (document.getElementById(`iframeWrapper${i}`) === null) {
          iframe[i].outerHTML = `<div class="iframe-wrapper" id="iframeWrapper${i}">${iframe[i].outerHTML}</div>`;
        }
      }
    }
  }

  const loadingClassName = setLoadingClassname(isLoading);
  return (
    <article className={style.article}>
      <p className={classNames(style.articleInfo, loadingClassName)}>{additionalInfo}</p>
      <h1 className={classNames(style.articleTitle, loadingClassName)}>{title}</h1>
      {hasFabula && <p className={classNames(style.articleDescription, loadingClassName)}>{description}</p>}
      <div
        className={classNames('article-simple-text', loadingClassName)}
        id="articleSimpleText"
        dangerouslySetInnerHTML={{ __html: isLoading ? '' : body }}
      />
    </article>
  );
}

export default Article;
