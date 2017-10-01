export const initialState = {
  projects: [
    {
      id: '123',
      name: 'Moving to Baltimore',
      description:
        'It is exciting. quorum veniam export labore nisi duis veniam fore ipsum duis fugiat aute fore minim velit aute fugiat illum malis export',
      householdArticles: [
        {
          name: desk,
          volume: 5,
          tag: 'A',
          memo: ''
        },
        {
          name: chair,
          volume: 3,
          tag: 'A',
          memo: ''
        },
        {
          name: 'medium carton',
          volume: 3,
          tag: 'A',
          memo: ''
        },
        {
          name: 'small carton',
          volume: 2,
          tag: 'A',
          memo: ''
        },
        {
          name: 'large carton',
          volume: 4,
          tag: 'A',
          memo: ''
        }
      ]
    }
  ],
  householdArticleDictionary: {
    desk: { volume: 5 },
    chair: { volume: 3 },
    'medium carton': { volume: 3 },
    'small carton': { volume: 2 },
    'large carton': { volume: 4 }
  }
};
