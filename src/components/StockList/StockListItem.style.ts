import styled from '@emotion/styled';

export const StockListBody = styled.tbody`
  height: 45px;
  width: 100%;
  vertical-align: middle;
  background: #f8f9fa;
  &:hover,
  &:hover * {
    background: #f1f1f4;
  }
  border: 1px solid #dee2e6;
  border-collapse: collapse;
`;

export const Favorites = styled.button`
  width: auto;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  color: gray;
  cursor: pointer;
`;

export const StockName = styled.td`
  width: 50%;
  flex: 1;
  color: #333333;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #f8f9fa;
`;

export const StockPrice = styled.td<{fixedChangeRate: number}>`
  width: 40%;
  flex: 1;
  color: ${props => (props.fixedChangeRate > 0 ? 'red' : props.fixedChangeRate === 0 ? 'black' : 'blue')};
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;

export const StockChangeRate = styled.td<{fixedChangeRate: number}>`
  width: 50%;
  flex: 1;
  color: ${props => (props.fixedChangeRate > 0 ? 'red' : props.fixedChangeRate === 0 ? 'black' : 'blue')};
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;

export const StockAccTradePrice = styled.td`
  width: 40%;
  flex: 1;
  color: #333333;
  font-size: 12px;
  white-space: nowrap;
  background: #f8f9fa;
`;