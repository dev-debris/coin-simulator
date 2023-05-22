import * as S from './TradeCoin.style';

function TradeCoin({selectedCoin}: TradeCoinProp) {
  return (
    <S.Wrapper>
      <S.CoinName>{selectedCoin.korean_name}</S.CoinName>
      <S.CoinPrice>{selectedCoin.trade_price}</S.CoinPrice>
    </S.Wrapper>
  );
}

export default TradeCoin;
