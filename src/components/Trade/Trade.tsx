import {ChangeEventHandler, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {selectedCoinState} from '@/recoil/atoms';
import * as S from './Trade.style';

function Trade() {
  const selectedCoin = useRecoilValue(selectedCoinState);
  const [quantity, setQuantity] = useState('0');
  const totalPrice = Number(quantity.replace(/,/g, '')) * 10000;

  const onChangeQuantity: ChangeEventHandler<HTMLInputElement> = e => {
    const newQuantity = e.target.value.replace(/\D/g, '');
    setQuantity(newQuantity.length ? Number(newQuantity).toLocaleString() : '0');
  };

  return (
    <S.Wrapper>
      <S.Title>매수 / 매도</S.Title>

      <S.SelectedCoinSection>
        {selectedCoin ? (
          <>
            <S.SelectedCoinName>{selectedCoin.korean_name}</S.SelectedCoinName>
            <S.SelectedCoinPrice>10000</S.SelectedCoinPrice>
          </>
        ) : (
          <S.NoSelectedCoin>매수/매도할 코인을 선택해 주세요</S.NoSelectedCoin>
        )}
      </S.SelectedCoinSection>

      {selectedCoin && (
        <S.TradeSection>
          <S.TradeBlock>
            <S.TradeTitle>거래 종류</S.TradeTitle>
            <S.TradeAction>
              <S.TradeActionOption>매수</S.TradeActionOption>
              <S.TradeActionOption>매도</S.TradeActionOption>
            </S.TradeAction>
          </S.TradeBlock>
          <S.TradeBlock>
            <S.TradeTitle>수량</S.TradeTitle>
            <S.TradeQuantity type="text" value={quantity} onChange={onChangeQuantity} />
          </S.TradeBlock>
          <S.TradeBlock>
            <S.TradeTitle>총 가격</S.TradeTitle>
            <S.TradePrice>{totalPrice.toLocaleString()} KRW</S.TradePrice>
          </S.TradeBlock>
        </S.TradeSection>
      )}
    </S.Wrapper>
  );
}

export default Trade;
