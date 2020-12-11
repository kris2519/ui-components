const TEAM_PREVIEW_HELPER = {
  team: {
    name: 'NAVI',
    countryName: 'Ukraine',
    country: true,
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

const TEAM_PREVIEW = {
  storybook: {
    ...TEAM_PREVIEW_HELPER
  }
};

export default TEAM_PREVIEW;
