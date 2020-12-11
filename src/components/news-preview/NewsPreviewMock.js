const NEWS_PREVIEW_HELPER = {
  id: 4877,
  publishedAt: '2018-12-19T15:43:00.000+00:00',
  discipline: 'Discipline',
  title: 'News Title',
  description: 'News Description One more buttle between atRage and private',
  img: {
    large: 'https://placehold.it/3360x1700',
    big: 'https://placehold.it/1680x850',
    medium: 'https://placehold.it/1200x600',
    small: 'https://placehold.it/600x300'
  },
  isLoading: false,
  imgMaxWidth: {
    small: '500px',
    medium: '800px',
    large: '1960px'
  }
};

const NEWS_PREVIEW = {
  storybook: {
    ...NEWS_PREVIEW_HELPER,
    isVideo: true,
    videoIcon: 'video',
    hasFabula: true,
    hasDescription: true,
    hasLink: true,
    to: '/to',
    linkText: 'Link To Article'
  },
  withFabula: {
    ...NEWS_PREVIEW_HELPER,
    isVideo: false,
    hasFabula: true,
    hasDescription: false,
    hasLink: false
  },
  withDescription: {
    ...NEWS_PREVIEW_HELPER,
    isVideo: false,
    hasFabula: false,
    hasDescription: true,
    hasLink: false
  },
  withLink: {
    ...NEWS_PREVIEW_HELPER,
    isVideo: false,
    hasFabula: false,
    hasDescription: true,
    hasLink: true,
    to: '/news/id',
    linkText: 'Load More'
  },
  withVideoIcon: {
    ...NEWS_PREVIEW_HELPER,
    isVideo: true,
    videoIcon: 'video',
    hasFabula: false,
    hasDescription: true,
    hasLink: false
  }
};

export default NEWS_PREVIEW;
