import styled from '@emotion/styled';

export const DetailTitle = styled.h2``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;

export const GridItem = styled.div``;

export const Content = styled.dl`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

export const ContentTerm = styled.dt`
  font-weight: bold;
`;

export const ContentDesc = styled.dd``;

export const Unit = styled.i`
  ${({
    theme: {
      colors: {FONT_MAIN_BOLD},
    },
  }) => {
    return {
      color: FONT_MAIN_BOLD,
      fontSize: '12px',
      fontWeight: 'bold',
    };
  }}
`;
