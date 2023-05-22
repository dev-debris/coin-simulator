import styled from '@emotion/styled';

export const ChartWrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  position: absolute;
  z-index: 9999;
  top: 0;
  right: 140px;
  padding: 5px;
  border-radius: 4px;
  border: solid;
  font-size: 10px;
  ${({theme: {colors}}) => {
    return {
      backgroundColor: colors.BACKGROUND_SUB,
      color: colors.FONT_MAIN_BOLD,
      borderColor: colors.BORDER,
    };
  }}
  &:focus {
    outline: none;
  }
`;
