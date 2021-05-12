import styled from 'styled-components';

import { colors } from '../../config/config';

export const Wrapper = styled.div`
    flex: 30% 1 auto;
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0;
    padding: 1rem;
    width: 25rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: ${colors.white};
    border-radius: 5px;

    @media (max-width: 1199px) {
        width: 20rem;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 200px;
`;

export const InfoWrapper = styled.div`
    width: 50%;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    background-color: ${colors.imdbYellow};
    color: black;
    font-weight: 900;
    border: none;
    border-radius: 5px;
    padding: 0.3rem 0rem;
    max-width: 100px;
    cursor: pointer;

    :hover {
        background-color: ${colors.darkerImdbYellow};
    }
`;

export const DefaultPoster = styled.div`
    height: 270px;
    max-width: 200px;
    background-color: ${colors.grey};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: ${colors.white};
    text-align: center;
`;
