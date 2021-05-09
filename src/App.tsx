import { useState } from 'react';

import { SearchInput } from './components/SearchInput';
import { LayoutWrapper, Text } from './styles';
import { QueryValue } from './types';

export const App = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (query: QueryValue) => {
        setQuery(query);
    };

    return (
        <LayoutWrapper>
            <Text size={5}>Search movies</Text>
            <SearchInput query={query} handleQuery={handleSearch} />
        </LayoutWrapper>
    );
};
