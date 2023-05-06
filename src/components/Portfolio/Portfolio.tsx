import PortfolioDetailList from '../PortfolioDetailList/PortfolioDetailList';
import PortfolioHeader from '../PortfolioHeader/PortfolioHeader';
import * as S from './Portfolio.style';

function Portfolio() {
  return (
    <S.Wrapper>
      <PortfolioHeader />
      <PortfolioDetailList />
    </S.Wrapper>
  );
}

export default Portfolio;
