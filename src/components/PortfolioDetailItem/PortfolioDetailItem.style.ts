import styled from '@emotion/styled';

export const PortfolioDetail = styled.li`
  ${({
    theme: {
      colors: {BORDER},
    },
  }) => ({
    borderTop: `1px solid ${BORDER}`,

    '&:last-child': {
      borderBottom: `1px solid ${BORDER}`,
    },
  })}
`;

export const Header = styled.header`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

export const CoinName = styled.h3`
  width: 50%;
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.FONT_MAIN};
  white-space: pre-line;
`;

export const HeaderList = styled.dl`
  width: 50%;
  font-size: 12px;
  color: ${props => props.theme.colors.FONT_MAIN};
  display: flex;
  flex-direction: column;
`;

export const HeaderListItem = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 4px;
  }
`;

export const HeaderListItemTitle = styled.dt``;

export const HeaderListItemDetail = styled.dd<{value: number}>`
  ${({
    value = 0,
    theme: {
      colors: {RISE, FALL, FONT_MAIN},
    },
  }) => ({
    color: value > 0 ? RISE : value === 0 ? FONT_MAIN : FALL,
  })}
`;

export const Body = styled.div``;

export const BodyList = styled.dl`
  padding: 12px 20px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 10px;
    width: calc(100% - 20px);
    height: 1px;
    background-color: ${props => props.theme.colors.BACKGROUND_SUB};
  }
`;

export const BodyListItem = styled.div`
  display: flex;
  justify-content: flex-start;

  & + & {
    margin-top: 8px;
  }
`;

export const BodyListSubItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const BodyListSubItemTitle = styled.dt`
  color: ${props => props.theme.colors.FONT_SUB};
  font-size: 11px;
`;

export const BodyListSubItemDetail = styled.dd`
  font-size: 14px;
`;

export const BodyListSubItemUnit = styled.i`
  color: ${props => props.theme.colors.FONT_MAIN_BOLD};
  font-size: 12px;
  font-weight: bold;
`;
