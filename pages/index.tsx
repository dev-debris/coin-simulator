import styled from '@emotion/styled';
import {Container, Portfolio, Search, StockDetail, StockList, Trade} from '@/components';

function HomePage() {
  return (
    <Container>
      <Root>
        <Left>
          <LeftChild>
            <Portfolio />
            <Trade />
          </LeftChild>
          <LeftChild>
            <Search />
            <StockList />
          </LeftChild>
        </Left>
        <Right>
          <StockDetail />
        </Right>
      </Root>
    </Container>
  );
}

const Root = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
`;

const LeftChild = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  width: 50%;
`;

export default HomePage;
