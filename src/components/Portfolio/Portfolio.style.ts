import styled from '@emotion/styled';

export const Wrapper = styled.section`
  flex: 1 1 auto;
  background-color: ${props => props.theme.colors.BACKGROUND_MAIN};
  padding: 20px 0;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.FONT_MAIN};
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-left: 20px;
`;
