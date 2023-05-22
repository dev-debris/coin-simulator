import {ChangeEventHandler, useState} from 'react';
import {useRecoilState} from 'recoil';
import {purchasedCoinListState, remainingCashState} from '@/recoil/atoms';
import * as S from './TradeOptions.style';

const TRADE_ACTION = {
  buy: '매수',
  sell: '매도',
} as const;

function TradeOptions({selectedCoin}: TradeOptionsProp) {
  const [remainingCash, setRemainingCash] = useRecoilState(remainingCashState);
  const [purchasedCoinList, setPurchasedCoinList] = useRecoilState(purchasedCoinListState);
  const [tradeAction, setTradeAction] = useState<ValueOf<typeof TRADE_ACTION>>(TRADE_ACTION.buy);
  const [quantity, setQuantity] = useState<number | null>(null);
  const totalPrice = (quantity || 0) * selectedCoin.trade_price;

  const onChangeTradeAction: ChangeEventHandler<HTMLSelectElement> = e => {
    setTradeAction(e.target.value as ValueOf<typeof TRADE_ACTION>);
  };

  const buyCoin = () => {
    if (quantity === null || quantity <= 0) {
      return alert('수량은 1개 이상이어야 합니다.');
    }

    if (totalPrice > remainingCash) {
      return alert('잔액이 부족합니다.');
    }

    let tradeConfirmMessage = '';

    tradeConfirmMessage += `매수 코인 개수: ${quantity}\n`;
    tradeConfirmMessage += `총 가격: ${totalPrice.toLocaleString()} KRW\n\n`;
    tradeConfirmMessage += `정말 매수하시겠습니까?`;

    if (confirm(tradeConfirmMessage)) {
      const purchasedCoin = purchasedCoinList.find(coin => coin.market === selectedCoin.market);

      setRemainingCash(remainingCash - totalPrice);
      setPurchasedCoinList(
        purchasedCoin
          ? purchasedCoinList.map(coin =>
              coin.market === purchasedCoin.market
                ? {
                    ...coin,
                    quantity: coin.quantity + quantity,
                    averagePrice: (coin.quantity * coin.averagePrice + totalPrice) / (coin.quantity + quantity),
                  }
                : coin
            )
          : [...purchasedCoinList, {market: selectedCoin.market, quantity, averagePrice: totalPrice / quantity}]
      );
    }
  };

  const sellCoin = () => {
    if (quantity === null || quantity <= 0) {
      return alert('수량은 1개 이상이어야 합니다.');
    }

    const purchasedCoin = purchasedCoinList.find(coin => coin.market === selectedCoin.market);

    if (!purchasedCoin || purchasedCoin.quantity < quantity) {
      return alert('매도할 코인이 부족합니다.');
    }

    let tradeConfirmMessage = '';

    tradeConfirmMessage += `매도 코인 개수: ${quantity}\n`;
    tradeConfirmMessage += `총 가격: ${totalPrice.toLocaleString()} KRW\n\n`;
    tradeConfirmMessage += `정말 매도하시겠습니까?`;

    if (confirm(tradeConfirmMessage)) {
      setRemainingCash(remainingCash + totalPrice);
      setPurchasedCoinList(
        purchasedCoinList
          .map(coin => (coin.market === selectedCoin.market ? {...coin, quantity: coin.quantity - quantity} : coin))
          .filter(coin => coin.quantity > 0)
      );
    }
  };

  const onClickSubmitButton = () => {
    if (tradeAction === TRADE_ACTION.buy) {
      buyCoin();
    } else {
      sellCoin();
    }
  };

  return (
    <S.Wrapper>
      <S.OptionBlock>
        <S.OptionTitle>거래 종류</S.OptionTitle>
        <S.TradeActionSelect value={tradeAction} onChange={onChangeTradeAction}>
          <S.TradeActionOption value={TRADE_ACTION.buy}>{TRADE_ACTION.buy}</S.TradeActionOption>
          <S.TradeActionOption value={TRADE_ACTION.sell}>{TRADE_ACTION.sell}</S.TradeActionOption>
        </S.TradeActionSelect>
      </S.OptionBlock>

      <S.OptionBlock>
        <S.OptionTitle>수량</S.OptionTitle>
        <S.TradeQuantity onChange={setQuantity} />
      </S.OptionBlock>

      <S.OptionBlock>
        <S.OptionTitle>총 가격</S.OptionTitle>
        <S.TotalPrice>{totalPrice.toLocaleString()} KRW</S.TotalPrice>
      </S.OptionBlock>

      <S.OptionBlock>
        <S.SubmitButton onClick={onClickSubmitButton}>{tradeAction}</S.SubmitButton>
      </S.OptionBlock>
    </S.Wrapper>
  );
}

export default TradeOptions;
