import { useState } from 'react';

import { SearchInput, Card } from './components';
import { LayoutWrapper, Text } from './styles';
import { QueryValue } from './types';

const MockMovies = {
    Title: 'Fat City',
    Year: '1972',
    imdbID: 'tt0068575',
    Type: 'movie',
    Poster:
        'https://m.media-amazon.com/images/M/MV5BYjQyYzQ2ZWEtZWUwZi00MDVjLTk4MzYtYTc2NmJmYTY5YzBhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
};

export const App = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (query: QueryValue) => {
        setQuery(query);
    };

    return (
        <LayoutWrapper>
            <Text size={5}>Search movies</Text>
            <SearchInput query={query} handleQuery={handleSearch} />
            <Card data={MockMovies} />
        </LayoutWrapper>
    );
};
