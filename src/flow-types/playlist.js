// @flow

export type VideoPlaylistItemType = {
  itemId: number,
  id: number,
  playlist: {
    id: number,
    name: string
  },
  type: string,
  title: string,
  duration: string | number,
  img: {
    small: string,
    medium: string
  },
  videoLink: string
};

export type PlaylistItemType = {
  id: number,
  name: string,
  size: number
};

export type FullVideoInfoType = {
  itemId: number,
  id: number,
  playlist: {
    id: number,
    name: string
  },
  type: string,
  title: string,
  duration: number,
  img: string,
  videoLink: string,
  event: {
    id: number,
    alias: string
  },
  tournament: {
    id: number
  },
  battle: {
    id: number
  }
};
