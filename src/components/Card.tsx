import styled from 'styled-components';

import { Text } from '../styles';
import { MovieData } from '../types';

interface PropsTypes {
    data: MovieData;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3rem;
    padding: 1rem;
    height: 320px;
    width: 430px;
    /* border: 1px solid black; */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 200px;
`;

const InfoWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    background-color: #f5c516;
    color: black;
    font-weight: 900;
    border: none;
    border-radius: 5px;
    padding: 0.3rem 0rem;
    max-width: 100px;
    cursor: pointer;

    :hover {
        background-color: #e2b616;
    }
`;

export const Card = ({ data }: PropsTypes) => {
    const posterAltName = `${data.Title}poster`;

    return (
        <Wrapper>
            <InfoWrapper>
                <InfoWrapper>
                    <Text size={1.7}>{data.Title}</Text>
                    <Text size={1.1}>{data.Year}</Text>
                    <Text size={0.9}>{data.Type}</Text>
                </InfoWrapper>

                <Button type="button">Go to IMBb</Button>
            </InfoWrapper>
            <div>
                <Img src={data.Poster} alt={posterAltName} width="100" height="200" />
            </div>
        </Wrapper>
    );
};
