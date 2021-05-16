export type QueryValue = string;
export type MovieItem = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

type MovieData = { Response: 'True'; Search: MovieItem[]; totalResults: string };
type MovieError = { Response: 'False'; Error: string };

export type MovieResponse = MovieData | MovieError;
