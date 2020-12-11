const EVENT_PREVIEW_HELPER = {
  id: 4877,
  date: '2018-12-19T15:43:00.000+00:00',
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
  },
  prize: '$1,000,000'
};

const EVENT_PREVIEW = {
  storybook: {
    ...EVENT_PREVIEW_HELPER,
    status: '',
    statusText: ''
  }
};

export default EVENT_PREVIEW;
