const PLAYER_PREVIEW_HELPER = {
  player: {
    name: 'Janusz Pogorzelski',
    nickname: 'Snax',
    img: {
      large: 'http://placehold.it/270x270',
      big: 'http://placehold.it/140x140',
      medium: 'http://placehold.it/72x72',
      small: 'http://placehold.it/36x36'
    }
  },
  isLoading: false,
  imgMaxWidth: {
    small: '500px',
    medium: '800px',
    large: '1960px'
  },
  isReverse: false
};

const PLAYER_PREVIEW = {
  storybook: {
    ...PLAYER_PREVIEW_HELPER
  }
};

export default PLAYER_PREVIEW;
