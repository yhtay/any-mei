// List of newly added anime only takes top 10

import { MCAnime } from "./dataTypes";

export const animeListData: MCAnime[] = [
  {
    id: 'abc123def456',
    title: {
      romaji: 'Kimetsu no Yaiba',
      english: 'Demon Slayer',
    },
    startDate: {
      year: 2019,
      month: 4,
    },
    endDate: null,
    season: 'SPRING',
    type: 'TV',
    format: 'TV',
    status: 'CURRENT',
    episodes: 26,
    genres: ['Action', 'Supernatural', 'Demons'],
    averageScore: 85,
    studios: [
      {
        name: 'ufotable',
      },
    ],
    coverImage: {
      medium: 'https://example.com/demon_slayer_cover_medium.jpg',
    },
    trailer: {
      site: 'youtube',
      id: 'abCD123ef',
    },
  },

  {
    id: 'ghi789jkl012',
    title: {
      romaji: 'One Punch Man',
      english: 'One Punch Man',
    },
    startDate: {
      year: 2015,
      month: 10,
    },
    endDate: {
      year: 2015,
      month: 12,
    },
    season: 'FALL',
    type: 'TV',
    format: 'TV',
    status: 'FINISHED',
    episodes: 12,
    genres: ['Action', 'Comedy', 'Superhero'],
    averageScore: 90,
    studios: [
      {
        name: 'Madhouse',
      },
    ],
    coverImage: {
      medium: 'https://example.com/one_punch_man_cover_medium.jpg',
    },
    trailer: {
      site: 'youtube',
      id: 'efGH456ij',
    },
  },

  {
    id: 'mno456pqr789',
    title: {
      romaji: 'Fullmetal Alchemist: Brotherhood',
      english: 'Fullmetal Alchemist: Brotherhood',
    },
    startDate: {
      year: 2009,
      month: 4,
    },
    endDate: {
      year: 2010,
      month: 7,
    },
    season: 'SPRING',
    type: 'TV',
    format: 'TV',
    status: 'FINISHED',
    episodes: 64,
    genres: ['Action', 'Adventure', 'Fantasy'],
    averageScore: 94,
    studios: [
      {
        name: 'Bones',
      },
    ],
    coverImage: {
      medium: 'https://example.com/fma_brotherhood_cover_medium.jpg',
    },
    trailer: {
      site: 'youtube',
      id: 'ghIJ789kl',
    },
  },
];
