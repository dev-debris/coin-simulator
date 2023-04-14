import PortfolioHeader from '../PortfolioHeader/PortfolioHeader';
import * as S from './Portfolio.style';

function Portfolio({coinList}: PortfolioProp) {
  return (
    <S.Wrapper>
      <S.Title>내 보유자산</S.Title>
      <PortfolioHeader />
      <S.UnorderedList>
        {coinList.length ? (
          coinList.map(({name, subName, quantity, averagePrice, currentPrice}) => {
            const purchaseAmount = quantity * averagePrice;
            const evaluationAmount = quantity * currentPrice;
            const valuationGainsAndLosses = evaluationAmount - purchaseAmount;
            const rateOfGainOrLossOnValuation = (valuationGainsAndLosses / purchaseAmount) * 100;

            return (
              <S.ListItem key={name}>
                <S.Header identifier="coinListItem">
                  <S.SubTitle>
                    {name}
                    <br />({subName})
                  </S.SubTitle>
                  <S.DescriptionList identifier="coinListItemHeader">
                    <S.DescriptionListItem>
                      <S.DescriptionTerm>평가손익</S.DescriptionTerm>
                      <S.DescriptionDetails identifier="coinListItemHeader" value={valuationGainsAndLosses}>
                        {valuationGainsAndLosses.toLocaleString()}
                      </S.DescriptionDetails>
                    </S.DescriptionListItem>
                    <S.DescriptionListItem>
                      <S.DescriptionTerm>수익률</S.DescriptionTerm>
                      <S.DescriptionDetails identifier="coinListItemHeader" value={rateOfGainOrLossOnValuation}>
                        {rateOfGainOrLossOnValuation.toFixed(2)}%
                      </S.DescriptionDetails>
                    </S.DescriptionListItem>
                  </S.DescriptionList>
                </S.Header>
                <S.DescriptionList identifier="coinListItemBody">
                  <S.DescriptionListItem identifier="coinListItemBody">
                    <S.DescriptionListSubItem>
                      <S.DescriptionDetails identifier="coinListItemBody">
                        {quantity.toLocaleString()} <S.Unit identifier="coinListItemBody">{subName}</S.Unit>
                      </S.DescriptionDetails>
                      <S.DescriptionTerm identifier="coinListItemBody">보유수량</S.DescriptionTerm>
                    </S.DescriptionListSubItem>
                    <S.DescriptionListSubItem>
                      <S.DescriptionDetails identifier="coinListItemBody">
                        {averagePrice.toLocaleString()} <S.Unit identifier="coinListItemBody">KRW</S.Unit>
                      </S.DescriptionDetails>
                      <S.DescriptionTerm identifier="coinListItemBody">매수평균가</S.DescriptionTerm>
                    </S.DescriptionListSubItem>
                  </S.DescriptionListItem>
                  <S.DescriptionListItem identifier="coinListItemBody">
                    <S.DescriptionListSubItem>
                      <S.DescriptionDetails identifier="coinListItemBody">
                        {evaluationAmount.toLocaleString()} <S.Unit identifier="coinListItemBody">KRW</S.Unit>
                      </S.DescriptionDetails>
                      <S.DescriptionTerm identifier="coinListItemBody">평가금액</S.DescriptionTerm>
                    </S.DescriptionListSubItem>
                    <S.DescriptionListSubItem>
                      <S.DescriptionDetails identifier="coinListItemBody">
                        {purchaseAmount.toLocaleString()} <S.Unit identifier="coinListItemBody">KRW</S.Unit>
                      </S.DescriptionDetails>
                      <S.DescriptionTerm identifier="coinListItemBody">매수금액</S.DescriptionTerm>
                    </S.DescriptionListSubItem>
                  </S.DescriptionListItem>
                </S.DescriptionList>
              </S.ListItem>
            );
          })
        ) : (
          <div>구매한 코인이 없습니다.</div>
        )}
      </S.UnorderedList>
    </S.Wrapper>
  );
}

export default Portfolio;
