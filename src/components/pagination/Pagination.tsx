import ReactPaginate from 'react-paginate';

import { SelectedPage } from '../../types';
import { StyledPaginateContainer } from './styles';

interface PropsTypes {
    totalPages: number;
    currentPage: number;
    handlePageChange: (page: SelectedPage) => void;
}

export const Pagination = ({ totalPages, currentPage, handlePageChange }: PropsTypes) => {
    return (
        <StyledPaginateContainer>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName="break-me"
                pageCount={totalPages}
                forcePage={currentPage - 1}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageChange}
                pageClassName={'pageClassName'}
                containerClassName={'pagination'}
                activeClassName={'active'}
                previousLinkClassName={'page-navigation'}
                nextLinkClassName={'page-navigation'}
            />
        </StyledPaginateContainer>
    );
};
