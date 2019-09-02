// @flow

export type VideoItemType = {
  id: number | string,
  img: {
    small: string,
    medium: string
  },
  publishedAt: string,
  title: string,
  videoLink: string,
  discipline: string
};
