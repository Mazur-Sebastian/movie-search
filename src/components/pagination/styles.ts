import styled from 'styled-components';

import { colors } from '../../config/config';

interface PaginationButtonProps {
    isActive?: boolean;
}

export const PaginationWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 30px 0;
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
    border-radius: 4px;
    font-size: 1rem;
    height: 34px;
    min-width: 34px;
    padding: 0 0.5rem;
    transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
    width: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.grey};
    margin: 5px 5px;
    background-color: ${({ isActive }) => (isActive ? colors.grey : colors.white)};
`;

export const PaginationDots = styled.span`
    display: flex;
    align-items: center;
`;
