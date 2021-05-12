import styled from 'styled-components';

import { colors } from '../../config/config';

// workaround for react-paginate styles
export const StyledPaginateContainer = styled.div`
    ul {
        list-style: none;
        padding: 0;
    }
    .pagination {
        color: ${colors.blue};
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .pageClassName a {
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
        border: 1px solid ${colors.blue};
        margin: 5px 5px;
    }
    .break-me {
        cursor: default;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 10px;
    }
    .active a {
        border-color: transparent;
        background-color: ${colors.blue};
        color: ${colors.white};
    }
    .page-navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 34px;
        min-width: 34px;
        padding: 0 0.5rem;
        margin-left: -1px;
        line-height: 1.42857143;
        background-color: ${colors.white};
        border: 1px solid ${colors.blue};
        cursor: pointer;
        margin: 5px 0;
    }
`;
