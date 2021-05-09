import { ChangeEvent } from 'react';

import { SearchInput as Input } from '../styles';
import { QueryValue } from '../types';

interface PropsTypes {
    query: QueryValue;
    handleQuery: (e: string) => void;
}

export const SearchInput = ({ query, handleQuery }: PropsTypes) => {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        handleQuery(e.target.value);
    };

    return (
        <>
            <Input type="text" onChange={handleSearch} value={query} />
        </>
    );
};
