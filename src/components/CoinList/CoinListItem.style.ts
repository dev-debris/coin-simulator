import styled from '@emotion/styled';

export const CoinListBody = styled.tbody<{isSelected: boolean}>`
  height: 45px;
  width: 100%;
  vertical-align: middle;
  &:hover,
  &:hover * {
    background: #f1f1f4;
  }
  border: 1px solid ${props => props.theme.colors.BORDER};
  border-collapse: collapse;
  background: ${props => (props.isSelected ? '#f1f1f4' : '#f8f9fa')};
`;

export const Favorites = styled.button`
  width: auto;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  color: gray;
  cursor: pointer;
`;

export const CoinName = styled.td`
  width: 50%;
  flex: 1;
  color: #333333;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const CoinPrice = styled.td<{fixedChangeRate: number}>`
  width: 40%;
  flex: 1;
  color: ${props =>
    props.fixedChangeRate > 0
      ? props.theme.colors.RISE
      : props.fixedChangeRate === 0
      ? props.theme.colors.FONT_MAIN
      : props.theme.colors.FALL};
  font-size: 12px;
  white-space: nowrap;
  cursor: default;
`;

export const CoinChangeRate = styled.td<{fixedChangeRate: number}>`
  width: 50%;
  flex: 1;
  color: ${props =>
    props.fixedChangeRate > 0
      ? props.theme.colors.RISE
      : props.fixedChangeRate === 0
      ? props.theme.colors.FONT_MAIN
      : props.theme.colors.FALL};
  font-size: 12px;
  white-space: nowrap;
  cursor: default;
`;

export const CoinAccTradePrice = styled.td`
  width: 40%;
  flex: 1;
  color: #333333;
  font-size: 12px;
  white-space: nowrap;
  cursor: default;
`;
