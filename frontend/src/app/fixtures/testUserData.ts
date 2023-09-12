import { MCUser } from './dataTypes';

export const userListData: MCUser[] = [
  {
    id: 'xyz789uvw123',
    username: 'anime_lover123',
    email: 'anime123@example.com',
    biography: 'Exploring the world of anime, one series at a time.',
    registrationDate: new Date('2022-05-10'),
    lastLoginDate: new Date('2023-08-28'),
    role: 'user',
    profileImgUrl: 'https://example.com/user1_profile.jpg',
    completedAnimes: [],
    currentlyWatchingAnimes: [],
    watchLaterAnimes: [],
    likedAnimes: [],
    dislikedAnimes: [],
  },
  {
    id: 'pqr456mno789',
    username: 'otaku_adventurer',
    email: 'adventurer@example.com',
    biography:
      'Embarking on epic anime journeys and collecting rare figurines.',
    registrationDate: new Date('2021-02-20'),
    lastLoginDate: new Date('2023-08-29'),
    role: 'user',
    profileImgUrl: 'https://example.com/user2_profile.jpg',
    completedAnimes: [],
    currentlyWatchingAnimes: [],
    watchLaterAnimes: [],
    likedAnimes: [],
    dislikedAnimes: [],
  },
  {
    id: 'lmn234opq567',
    username: 'manga_buff',
    email: 'manga@example.com',
    biography: 'Diving into manga worlds and waiting for anime adaptations.',
    registrationDate: new Date('2023-04-15'),
    lastLoginDate: new Date('2023-08-28'),
    role: 'user',
    profileImgUrl: 'https://example.com/user3_profile.jpg',
    completedAnimes: [],
    currentlyWatchingAnimes: [],
    watchLaterAnimes: [],
    likedAnimes: [],
    dislikedAnimes: [],
  },
];
