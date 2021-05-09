import { useState } from 'react';

import { SearchInput } from './components/SearchInput';
import { QueryValue } from './types';

export const App = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (query: QueryValue) => {
        setQuery(query);
    };

    return (
        <>
            <h1>Search movies</h1>
            <SearchInput query={query} handleQuery={handleSearch} />
        </>
    );
};
