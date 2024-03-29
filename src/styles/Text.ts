import styled from 'styled-components';

interface Props {
    size?: number;
    alignText?: boolean;
}

export const Text = styled.span<Props>`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: black;
    font-size: ${props => `${props.size}rem` || '1rem'};
    padding: 0.5rem;
    text-align: ${props => (props.alignText ? 'center' : 'none')}; ;
`;
