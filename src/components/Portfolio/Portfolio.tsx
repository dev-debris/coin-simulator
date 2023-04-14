import PortfolioDetailList from '../PortfolioDetailList/PortfolioDetailList';
import PortfolioHeader from '../PortfolioHeader/PortfolioHeader';
import * as S from './Portfolio.style';

function Portfolio() {
  return (
    <S.Wrapper>
      <S.Title>내 보유자산</S.Title>
      <PortfolioHeader />
      <PortfolioDetailList />
    </S.Wrapper>
  );
}

export default Portfolio;
