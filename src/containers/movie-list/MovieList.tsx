import { useMovies } from '../../hooks/useMovies';
import { CenterWrapper, Text } from '../../styles';
import { rootService } from '../../config/rootService';
import { Card, Pagination } from '../../components';
import { QueryValue } from '../../types';

interface PropsTypes {
    query: QueryValue;
}

export const MovieList = ({ query }: PropsTypes) => {
    const { movieList, totalPages, currentPage, setCurrentPage, error } = useMovies(
        rootService,
        query,
    );

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected + 1);
    };

    return (
        <>
            <CenterWrapper>
                {!error && movieList.map(movie => <Card data={movie} key={movie.imdbID} />)}
                {error && <Text size={2}>{error}</Text>}
            </CenterWrapper>

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
        </>
    );
};
