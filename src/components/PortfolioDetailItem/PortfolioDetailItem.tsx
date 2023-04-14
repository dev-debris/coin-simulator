import {useMemo} from 'react';
import * as S from './PortfolioDetailItem.style';

function PortfolioDetailItem({
  coin: {quantity, averagePrice, trade_price, korean_name, english_name},
}: PortfolioDetailItemProp) {
  const purchaseAmount = useMemo(() => quantity * averagePrice, [quantity, averagePrice]);
  const evaluationAmount = useMemo(() => quantity * trade_price, [quantity, trade_price]);
  const valuationGainsAndLosses = useMemo(() => evaluationAmount - purchaseAmount, [evaluationAmount, purchaseAmount]);
  const rateOfGainOrLossOnValuation = useMemo(
    () => (valuationGainsAndLosses / purchaseAmount) * 100,
    [valuationGainsAndLosses, purchaseAmount]
  );

  const headerItemList = useMemo(
    () => [
      {title: '평가손익', value: valuationGainsAndLosses, formatted: valuationGainsAndLosses.toLocaleString()},
      {title: '수익률', value: rateOfGainOrLossOnValuation, formatted: `${rateOfGainOrLossOnValuation.toFixed(2)}%`},
    ],
    [valuationGainsAndLosses, rateOfGainOrLossOnValuation]
  );

  const bodyItemList = useMemo(
    () => [
      [
        {title: '보유수량', value: quantity.toLocaleString(), unit: english_name},
        {title: '매수평균가', value: averagePrice.toLocaleString(), unit: 'KRW'},
      ],
      [
        {title: '평가금액', value: evaluationAmount.toLocaleString(), unit: 'KRW'},
        {title: '매수금액', value: purchaseAmount.toLocaleString(), unit: 'KRW'},
      ],
    ],
    [quantity, english_name, averagePrice, evaluationAmount, purchaseAmount]
  );

  return (
    <S.PortfolioDetail>
      <S.Header>
        <S.CoinName>
          {korean_name}
          <br />({english_name})
        </S.CoinName>
        <S.HeaderList>
          {headerItemList.map(({title, value, formatted}) => (
            <S.HeaderListItem key={title}>
              <S.HeaderListItemTitle>{title}</S.HeaderListItemTitle>
              <S.HeaderListItemDetail value={value}>{formatted}</S.HeaderListItemDetail>
            </S.HeaderListItem>
          ))}
        </S.HeaderList>
      </S.Header>

      <S.Body>
        <S.BodyList>
          {bodyItemList.map(itemList => (
            <S.BodyListItem key={itemList[0].title}>
              {itemList.map(({title, value, unit}) => (
                <S.BodyListSubItem key={title}>
                  <S.BodyListSubItemDetail>
                    {value} <S.BodyListSubItemUnit>{unit}</S.BodyListSubItemUnit>
                  </S.BodyListSubItemDetail>
                  <S.BodyListSubItemTitle>{title}</S.BodyListSubItemTitle>
                </S.BodyListSubItem>
              ))}
            </S.BodyListItem>
          ))}
        </S.BodyList>
      </S.Body>
    </S.PortfolioDetail>
  );
}

export default PortfolioDetailItem;
