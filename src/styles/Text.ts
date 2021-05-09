import styled from 'styled-components';

interface Props {
    size?: number;
}

export const Text = styled.span<Props>`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: black;
    font-size: ${props => `${props.size}rem` || '1rem'};
    padding: 0.5rem;
`;
