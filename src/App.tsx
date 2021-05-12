import { SearchHeader, MovieList } from './containers';
import { useDebounce } from './hooks';
import { LayoutWrapper } from './styles';

export const App = () => {
    const [debouncedQuery, query, setQuery] = useDebounce('', 500);

    return (
        <LayoutWrapper>
            <SearchHeader query={query} handleQuery={setQuery} />
            <MovieList query={debouncedQuery} />
        </LayoutWrapper>
    );
};
