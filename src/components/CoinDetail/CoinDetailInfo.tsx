import * as S from './CoinDetailInfo.style';

const CoinDetailInfo = ({
  coin: {
    market,
    trade_price,
    opening_price,
    high_price,
    highest_52_week_price,
    low_price,
    lowest_52_week_price,
    prev_closing_price,
    trade_volume,
  },
}: CoinDetailInfoProp) => {
  return (
    <>
      <S.DetailTitle>{market}</S.DetailTitle>
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
