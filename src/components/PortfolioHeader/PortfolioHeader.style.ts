import styled from '@emotion/styled';

export const Header = styled.header``;

export const Title = styled.h2`
  color: ${props => props.theme.colors.FONT_MAIN};
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const HeaderList = styled.dl``;

export const HeaderListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 20px;

  & + & {
    margin-top: 4px;
  }
`;

export const ItemTitle = styled.dt`
  color: ${props => props.theme.colors.FONT_SUB_BOLD};
  font-size: 14px;
`;

export const ItemDetail = styled.dd`
  color: ${props => props.theme.colors.FONT_MAIN};
  font-size: 20px;
  font-weight: bold;
`;

export const Unit = styled.i`
  color: ${props => props.theme.colors.FONT_SUB};
  font-size: 11px;
`;
