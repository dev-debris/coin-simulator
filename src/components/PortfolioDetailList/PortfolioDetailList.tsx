import {useRecoilValue} from 'recoil';
import {useCoinListQuery} from '@/hooks/queries';
import {purchasedCoinListState} from '@/recoil/atoms';
import PortfolioDetailItem from '../PortfolioDetailItem/PortfolioDetailItem';
import * as S from './PortfolioDetailList.style';

function PortfolioDetailList() {
  const purchasedCoinList = useRecoilValue(purchasedCoinListState);
  const {data: allCoinList} = useCoinListQuery();

  return (
    <S.List>
      {purchasedCoinList
        .map(purchasedCoin => {
          const coin = allCoinList.find(c => c.market === purchasedCoin.market);

          if (!coin) {
            return null;
          }

          return {...purchasedCoin, ...coin};
        })
        .filter((purchasedCoin): purchasedCoin is PurchasedCoin => !!purchasedCoin)
        .map(purchasedCoin => (
          <PortfolioDetailItem key={purchasedCoin.market} coin={purchasedCoin} />
        ))}
    </S.List>
  );
}

export default PortfolioDetailList;
