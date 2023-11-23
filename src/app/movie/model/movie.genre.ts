export interface MovieGenreItem {
  genre: string
  text: string
}

export enum MovieGenre {
  Action = 'Action',
  Comedy = 'Comedy',
  Drama = 'Drama',
  // Add more genres as needed
}

export const MOVIE_GENRE: MovieGenreItem [] = [
  {genre: MovieGenre.Action, text: "Akcja"},
  {genre: MovieGenre.Comedy, text: "Komedia"},
  {genre: MovieGenre.Drama, text: "Dramat"}
];

export const MOVIE_GENRE_ICONS: { [key in MovieGenre]: string } = {
  [MovieGenre.Action]: 'assets/action-icon.png',
  [MovieGenre.Comedy]: 'assets/comedy-icon.png',
  [MovieGenre.Drama]: 'assets/drama-icon.png',
  // Add more genres and their icons as needed
};
