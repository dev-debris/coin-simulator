import styled from '@emotion/styled';
import {useRecoilValue} from 'recoil';
import {selectedCoinState} from '@/atoms';
import {Container, Portfolio, Search, CoinDetail, CoinList, Trade} from '@/components';

function HomePage() {
  const selectedCoin = useRecoilValue(selectedCoinState);

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
        <Right>{selectedCoin && <CoinDetail coin={selectedCoin} />}</Right>
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
