import {useMemo} from 'react';
import {useRecoilValue} from 'recoil';
import {purchasedCoinListState, remainingCashState} from '@/atoms';
import {useCoinListQuery} from '@/hooks/queries';
import * as S from './PortfolioHeader.style';

function PortfolioHeader() {
  const remainingCash = useRecoilValue(remainingCashState);
  const purchasedCoinList = useRecoilValue(purchasedCoinListState);
  const {data: allCoinList} = useCoinListQuery();
  const netAssets = useMemo(
    () =>
      remainingCash +
      purchasedCoinList.reduce((sum, purchasedCoin) => {
        const coin = allCoinList.find(c => c.market === purchasedCoin.market);

        if (!coin) {
          return sum;
        }

        return sum + purchasedCoin.quantity * coin.trade_price;
      }, 0),
    [remainingCash, purchasedCoinList, allCoinList]
  );

  return (
    <S.Header>
      <S.Title>내 보유자산</S.Title>
      <S.HeaderList>
        <S.HeaderListItem>
          <S.ItemTitle>총 보유 자산</S.ItemTitle>
          <S.ItemDetail>
            {netAssets.toLocaleString()} <S.Unit>KRW</S.Unit>
          </S.ItemDetail>
        </S.HeaderListItem>
        <S.HeaderListItem>
          <S.ItemTitle>보유 KRW</S.ItemTitle>
          <S.ItemDetail>
            {remainingCash.toLocaleString()} <S.Unit>KRW</S.Unit>
          </S.ItemDetail>
        </S.HeaderListItem>
      </S.HeaderList>
    </S.Header>
  );
}

export default PortfolioHeader;
