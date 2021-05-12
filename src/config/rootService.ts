import { HttpService } from '../services/Http';
import { MovieService } from '../services/MovieService';
import { appConfig } from './config';

export const httpService = new HttpService();
export const movieService = new MovieService(httpService, appConfig.omdbUrl, appConfig.omdbApiKey);
export const rootService = { movieService };

export type RootService = typeof rootService;
