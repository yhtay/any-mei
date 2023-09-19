export type MCUser = {
  // 12 + characters
  id: string;
  username: string;
  email: string;
  biography: string;
  registrationDate: Date;
  lastLoginDate: Date;

  //   Fix this later
  role: string;

  profileImgUrl: string;
  profileWallPaperUrL: string;
  completedAnimes: string[];
  currentlyWatchingAnimes: string[];
  watchLaterAnimes: string[];

  likedAnimes: string[];
  dislikedAnimes: string[];
};

export type MCLogs = {
  accessId: string;
  accessedBy: string;
  //   Format: 2023-08-29 14:10:20
  timestamp: string;

  // Create, Update, Fix, Debug -- etc
  task: string;
  summary: string;
};

export type MCAnime = {
  id: string;
  title: {
    romaji: string;
    english: string;
  };
  startDate: {
    year: number;
    month: number;
  };
  endDate: {
    year: number | null;
    month: number | null;
  } | null;
  season: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  genres: string[];
  averageScore: number;
  studios: {
    name: string;
  }[];
  coverImage: {
    medium: string;
  };
  trailer: {
    site: string;
    id: string;
  };
};
