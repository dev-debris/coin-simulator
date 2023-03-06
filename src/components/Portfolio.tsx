import styled from '@emotion/styled';

function Portfolio({netAssets, remainingCash, coinList}: PortfolioProp) {
  return (
    <Wrapper>
      <Title>내 보유자산</Title>
      <Metadata>
        <MetadataTitle>총 보유 자산</MetadataTitle>
        <MetadataContent>
          {netAssets.toLocaleString()} <MetadataUnit>KRW</MetadataUnit>
        </MetadataContent>
      </Metadata>
      <Metadata>
        <MetadataTitle>보유 KRW</MetadataTitle>
        <MetadataContent>
          {remainingCash.toLocaleString()} <MetadataUnit>KRW</MetadataUnit>
        </MetadataContent>
      </Metadata>
      <CoinList>
        {coinList.length ? (
          coinList.map(({name, subName, quantity, averagePrice, currentPrice}) => {
            const purchaseAmount = quantity * averagePrice;
            const evaluationAmount = quantity * currentPrice;
            const valuationGainsAndLosses = evaluationAmount - purchaseAmount;
            const rateOfGainOrLossOnValuation = (valuationGainsAndLosses / purchaseAmount) * 100;

            return (
              <CoinListItem key={name}>
                <CoinListItemHeader>
                  <CoinName>
                    {name}
                    <br />({subName})
                  </CoinName>
                  <ProfitAndLoss>
                    <ProfitAndLossItem>
                      <ProfitAndLossItemTitle>평가손익</ProfitAndLossItemTitle>
                      <ProfitAndLossItemValue value={valuationGainsAndLosses}>
                        {valuationGainsAndLosses.toLocaleString()}
                      </ProfitAndLossItemValue>
                    </ProfitAndLossItem>
                    <ProfitAndLossItem>
                      <ProfitAndLossItemTitle>수익률</ProfitAndLossItemTitle>
                      <ProfitAndLossItemValue value={rateOfGainOrLossOnValuation}>
                        {rateOfGainOrLossOnValuation.toFixed(2)}%
                      </ProfitAndLossItemValue>
                    </ProfitAndLossItem>
                  </ProfitAndLoss>
                </CoinListItemHeader>
                <CoinListItemBody>
                  <BodyItem>
                    <BodySubItem>
                      <BodySubItemValue>
                        {quantity.toLocaleString()} <BodySubItemUnit>{subName}</BodySubItemUnit>
                      </BodySubItemValue>
                      <BodySubItemTitle>보유수량</BodySubItemTitle>
                    </BodySubItem>
                    <BodySubItem>
                      <BodySubItemValue>
                        {averagePrice.toLocaleString()} <BodySubItemUnit>KRW</BodySubItemUnit>
                      </BodySubItemValue>
                      <BodySubItemTitle>매수평균가</BodySubItemTitle>
                    </BodySubItem>
                  </BodyItem>
                  <BodyItem>
                    <BodySubItem>
                      <BodySubItemValue>
                        {evaluationAmount.toLocaleString()} <BodySubItemUnit>KRW</BodySubItemUnit>
                      </BodySubItemValue>
                      <BodySubItemTitle>평가금액</BodySubItemTitle>
                    </BodySubItem>
                    <BodySubItem>
                      <BodySubItemValue>
                        {purchaseAmount.toLocaleString()} <BodySubItemUnit>KRW</BodySubItemUnit>
                      </BodySubItemValue>
                      <BodySubItemTitle>매수금액</BodySubItemTitle>
                    </BodySubItem>
                  </BodyItem>
                </CoinListItemBody>
              </CoinListItem>
            );
          })
        ) : (
          <div>구매한 코인이 없습니다.</div>
        )}
      </CoinList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 1 auto;
  background-color: #fff;
  padding: 20px 0;
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const Metadata = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 20px;

  & + & {
    margin-top: 4px;
  }
`;

const MetadataTitle = styled.span`
  color: #666;
  font-size: 14px;
`;

const MetadataContent = styled.span`
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

const MetadataUnit = styled.i`
  color: #999;
  font-size: 11px;
`;

const CoinList = styled.div`
  margin-top: 20px;
`;

const CoinListItem = styled.div`
  border-top: 1px solid #ddd;

  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`;

const CoinListItemHeader = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

const CoinName = styled.div`
  width: 50%;
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

const ProfitAndLoss = styled.div`
  width: 50%;
  font-size: 12px;
  color: #333;
  display: flex;
  flex-direction: column;
`;

const ProfitAndLossItem = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 4px;
  }
`;

const ProfitAndLossItemTitle = styled.span``;

const ProfitAndLossItemValue = styled.span<{value: number}>`
  color: ${({value}) => (value > 0 ? 'red' : value === 0 ? '#333' : 'blue')};
`;

const CoinListItemBody = styled.div`
  padding: 12px 20px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 10px;
    width: calc(100% - 20px);
    height: 1px;
    background-color: #f1f1f4;
  }
`;

const BodyItem = styled.div`
  display: flex;

  & + & {
    margin-top: 8px;
  }
`;

const BodySubItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const BodySubItemValue = styled.span`
  font-size: 14px;
`;

const BodySubItemUnit = styled.i`
  color: #000;
  font-size: 12px;
  font-weight: bold;
`;

const BodySubItemTitle = styled.span`
  color: #999;
  font-size: 11px;
`;

export default Portfolio;
