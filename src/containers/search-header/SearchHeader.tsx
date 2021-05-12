import { ChangeEvent } from 'react';

import { Text } from '../../styles';
import { HeaderWrapper } from './styles';
import { SearchInput } from '../../components';
import { QueryValue } from '../../types';

interface PropsTypes {
    query: QueryValue;
    handleQuery: (e: string) => void;
}

export const SearchHeader = ({ query, handleQuery }: PropsTypes) => {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        handleQuery(e.target.value);
    };

    return (
        <HeaderWrapper>
            <Text size={5} alignText>
                Search movies
            </Text>
            <SearchInput query={query} handleSearch={handleSearch} placeholder="Search movies" />
        </HeaderWrapper>
    );
};
