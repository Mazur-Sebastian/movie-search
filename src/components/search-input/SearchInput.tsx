import { ChangeEvent } from 'react';

import { SearchInput as Input } from './styles';
import { QueryValue } from '../../types';

interface PropsTypes {
    query: QueryValue;
    placeholder: string;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ query, handleSearch, placeholder }: PropsTypes) => {
    return (
        <>
            <Input type="text" onChange={handleSearch} value={query} placeholder={placeholder} />
        </>
    );
};
