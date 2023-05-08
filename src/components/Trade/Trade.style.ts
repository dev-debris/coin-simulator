import styled from '@emotion/styled';

export const Wrapper = styled.div`
  flex: 0 1 auto;
  margin-top: 10px;
  padding: 20px;
  background-color: ${props => props.theme.colors.BACKGROUND_MAIN};
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const SelectedCoinSection = styled.section`
  padding: 10px 0;
  border-top: 1px dotted ${props => props.theme.colors.BORDER};
  border-bottom: 1px dotted ${props => props.theme.colors.BORDER};
  display: flex;
`;

export const SelectedCoinName = styled.span``;

export const SelectedCoinPrice = styled.span``;

export const NoSelectedCoin = styled.span``;

export const TradeSection = styled.section``;

export const TradeBlock = styled.div``;

export const TradeTitle = styled.dt``;

export const TradeAction = styled.select``;

export const TradeActionOption = styled.option``;

export const TradeQuantity = styled.input``;

export const TradePrice = styled.span``;
