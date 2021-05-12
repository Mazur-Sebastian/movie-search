import { MovieItem } from './../types';
import { useEffect, useState } from 'react';
import { RootService } from '../config/rootService';
import { removeDuplicates } from '../helpers';

export const useMovies = ({ movieService }: RootService, query: string) => {
    const [movieList, setMovieList] = useState<MovieItem[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState('');

    const handleMovieList = (movieList: MovieItem[], totalPages: number, errorMsg: string) => {
        setError(errorMsg);
        setMovieList(movieList);
        setTotalPages(() => totalPages / 10);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [query, setCurrentPage]);

    useEffect(() => {
        movieService
            .getMovieList({ s: query, page: currentPage })
            .then(data =>
                data.Response === 'False'
                    ? handleMovieList([], 0, data.Error)
                    : handleMovieList(removeDuplicates(data.Search), Number(data.totalResults), ''),
            )
            .catch(e => {
                setError(e.msg);
            });
    }, [query, currentPage, movieService]);

    return { movieList, totalPages, currentPage, setCurrentPage, error };
};
