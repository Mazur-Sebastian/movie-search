import styled from 'styled-components';

export const SearchInput = styled.input`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 1rem;

    width: 100%;
    background-color: transparent;
    margin: 0;
    color: black;
    word-wrap: break-word;
    outline: none;
    display: flex;
    flex: 100%;
    height: 34px;
    padding: 0.4rem 1rem;
    font-size: 1rem;
    border-radius: 24px;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    :hover,
    :focus {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;
