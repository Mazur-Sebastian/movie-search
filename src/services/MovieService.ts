import { MovieResponse } from '../types';
import { HttpService } from './Http';

export class MovieService {
    constructor(
        private httpService: HttpService,
        private readonly url: string,
        private readonly apikey: string,
    ) {}

    public getMovieList(params: any): Promise<MovieResponse> {
        return this.httpService.get(this.url, { ...params, apikey: this.apikey });
    }
}
