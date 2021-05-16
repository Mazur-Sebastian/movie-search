import { PaginationWrapper, PaginationButton, PaginationDots } from './styles';

interface PropsTypes {
    totalPages: number;
    currentPage: number;
    handlePageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, handlePageChange }: PropsTypes) => {
    const arr = Array.from(Array(totalPages).keys()).map(item => item + 1);
    const preparedPages =
        currentPage < 5
            ? arr.slice(1, 6)
            : totalPages <= currentPage + 2
            ? arr.slice(totalPages - 6, totalPages - 1)
            : arr.slice(currentPage - 3, currentPage + 2);
    const pages = preparedPages.filter(page => page !== 1 && page !== totalPages);
    const lastPage = pages.slice(-1)[0];

    return (
        <PaginationWrapper>
            <PaginationButton isActive={currentPage === 1} onClick={() => handlePageChange(1)}>
                1
            </PaginationButton>
            {currentPage > 4 && <PaginationDots>...</PaginationDots>}
            {pages.map(page => (
                <PaginationButton
                    isActive={currentPage === page}
                    key={page}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </PaginationButton>
            ))}
            {lastPage && lastPage < totalPages - 1 && <PaginationDots>...</PaginationDots>}
            {totalPages !== 1 && (
                <PaginationButton
                    isActive={currentPage === totalPages}
                    onClick={() => handlePageChange(totalPages)}
                >
                    {totalPages}
                </PaginationButton>
            )}
        </PaginationWrapper>
    );
};
