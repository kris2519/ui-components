const MATCH_PREVIEW_HELPER = {
  playerTeam: {
    name: 'Team name',
    img: {
      large: 'http://placehold.it/270x270',
      big: 'http://placehold.it/140x140',
      medium: 'http://placehold.it/72x72',
      small: 'http://placehold.it/36x36'
    },
    score: 10,
    isWinner: true
  },
  opponentTeam: {
    name: 'Team name',
    img: {
      large: 'http://placehold.it/270x270',
      big: 'http://placehold.it/140x140',
      medium: 'http://placehold.it/72x72',
      small: 'http://placehold.it/36x36'
    },
    score: 2,
    isWinner: false
  },
  matchName: 'Match name',
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

const MATCH_PREVIEW = {
  storybook: {
    ...MATCH_PREVIEW_HELPER,
    badge: 'Badge',
    discipline: 'Discipline',
    date: '2018-12-19T15:43:00.000+00:00',
    system: 'System message',
    isTechEnd: false,
    map: [
      {
        id: 1,
        playerScore: 2,
        opponentScore: 1,
        name: 'Map name'
      },
      {
        id: 2,
        playerScore: 0,
        opponentScore: 0,
        name: 'Map name'
      },
      {
        id: 4,
        playerScore: null,
        opponentScore: 5,
        name: 'Null map name'
      },
      {
        id: 3,
        playerScore: 3,
        opponentScore: 5,
        name: 'Map name'
      }
    ]
  },
  matchLive: {
    ...MATCH_PREVIEW_HELPER,
    badge: 'Badge',
    discipline: 'Discipline',
    system: 'System message'
  },
  matchUpcoming: {
    ...MATCH_PREVIEW_HELPER,
    date: '2018-12-19T15:43:00.000+00:00',
    discipline: 'Discipline',
    system: 'System message'
  },
  matchFinished: {
    ...MATCH_PREVIEW_HELPER,
    system: 'System message',
    isTechEnd: false
  },
  matchFinishedTechEnd: {
    ...MATCH_PREVIEW_HELPER,
    system: 'System message',
    playerTeam: {
      score: 0,
      isWinner: false
    },
    opponentTeam: {
      score: 0,
      isWinner: false
    },
    isTechEnd: true
  },
  matchFinishedMap: {
    ...MATCH_PREVIEW_HELPER,
    system: 'System message',
    map: [
      {
        id: 1,
        playerScore: 2,
        opponentScore: 1,
        name: 'Map name'
      },
      {
        id: 2,
        playerScore: 0,
        opponentScore: 0,
        name: 'Map name'
      },
      {
        id: 3,
        playerScore: 3,
        opponentScore: 5,
        name: 'Map name'
      }
    ]
  }
};

export default MATCH_PREVIEW;
