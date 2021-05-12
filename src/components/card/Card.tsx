import { Text } from '../../styles';
import { MovieItem } from '../../types';
import * as S from './styles';

interface PropsTypes {
    data: MovieItem;
}

export const Card = ({ data }: PropsTypes) => {
    const posterAltName = `${data.Title}poster`;
    const openIMDB = () => window.open(`https://www.imdb.com/title/${data.imdbID}/`);

    return (
        <S.Wrapper>
            <S.InfoWrapper>
                <Text size={2}>{data.Title}</Text>
                <S.InfoWrapper>
                    <Text size={1.7}>{data.Year}</Text>
                    <Text size={1.3}>{data.Type}</Text>
                </S.InfoWrapper>

                <S.Button type="button" onClick={() => openIMDB()}>
                    Go to IMBb
                </S.Button>
            </S.InfoWrapper>
            <S.InfoWrapper>
                {data.Poster !== 'N/A' ? (
                    <S.Img src={data.Poster} alt={posterAltName} width="100" height="200" />
                ) : (
                    <S.DefaultPoster>No poster</S.DefaultPoster>
                )}
            </S.InfoWrapper>
        </S.Wrapper>
    );
};
