import styled from '@emotion/styled';
import {Container, Portfolio, Search, CoinDetail, CoinList, Trade} from '@/components';

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
            <CoinList />
          </LeftChild>
        </Left>
        <Right>
          <CoinDetail />
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
