import {useRecoilValue} from 'recoil';
import {convertedSelectedCoinState} from '@/recoil/selectors';
import * as S from './CoinDetailInfo.style';

const CoinDetailInfo = () => {
  const {
    market,
    trade_price,
    opening_price,
    prev_closing_price,
    high_price,
    low_price,
    trade_volume,
    highest_52_week_price,
    lowest_52_week_price,
  } = useRecoilValue(convertedSelectedCoinState);

  return (
    <>
      <S.DetailTitle>{market || '코인명'}</S.DetailTitle>
      <S.Grid>
        <S.GridItem>
          <S.Content>
            <S.ContentTerm>Price</S.ContentTerm>
            <S.ContentDesc>
              {trade_price} <S.Unit>KRW</S.Unit>
            </S.ContentDesc>
          </S.Content>
          <S.Content>
            <S.ContentTerm>Open</S.ContentTerm>
            <S.ContentDesc>
              {opening_price} <S.Unit>KRW</S.Unit>
            </S.ContentDesc>
          </S.Content>
          <S.Content>
            <S.ContentTerm>Close</S.ContentTerm>
            <S.ContentDesc>
              {prev_closing_price} <S.Unit>KRW</S.Unit>
            </S.ContentDesc>
          </S.Content>
        </S.GridItem>
        <S.GridItem>
          <S.Content>
            <S.ContentTerm>High</S.ContentTerm>
            <S.ContentDesc>
              {high_price} <S.Unit>KRW</S.Unit>
            </S.ContentDesc>
          </S.Content>
          <S.Content>
            <S.ContentTerm>Low</S.ContentTerm>
            <S.ContentDesc>
              {low_price} <S.Unit>KRW</S.Unit>
            </S.ContentDesc>
          </S.Content>
          <S.Content>
            <S.ContentTerm>Volume</S.ContentTerm>
            <S.ContentDesc>{trade_volume}</S.ContentDesc>
          </S.Content>
        </S.GridItem>
        <S.GridItem>
          <S.Content>
            <S.ContentTerm>52-Week High</S.ContentTerm>
            <S.ContentDesc>
              {highest_52_week_price} <S.Unit>KRW</S.Unit>
            </S.ContentDesc>
          </S.Content>
          <S.Content>
            <S.ContentTerm>52-Week Low</S.ContentTerm>
            <S.ContentDesc>
              {lowest_52_week_price} <S.Unit>KRW</S.Unit>
            </S.ContentDesc>
          </S.Content>
        </S.GridItem>
      </S.Grid>
    </>
  );
};

export default CoinDetailInfo;
