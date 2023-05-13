import {useRecoilValue} from 'recoil';
import {selectedCoinState} from '@/recoil/atoms';
import TradeCoin from '../TradeCoin/TradeCoin';
import TradeOptions from '../TradeOptions/TradeOptions';
import * as S from './Trade.style';

function Trade() {
  const selectedCoin = useRecoilValue(selectedCoinState);

  return (
    <S.Wrapper>
      <S.Title>매수 / 매도</S.Title>

      {selectedCoin ? (
        <>
          <TradeCoin selectedCoin={selectedCoin} />
          <TradeOptions selectedCoin={selectedCoin} />
        </>
      ) : (
        <S.NoCoin>매수/매도할 코인을 선택해 주세요</S.NoCoin>
      )}
    </S.Wrapper>
  );
}

export default Trade;
