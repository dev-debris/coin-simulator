import styled from '@emotion/styled';

export const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export const BorderNone = styled.table`
  padding: 0;
  margin: 0;
  border: 0;
  border-spacing: 0;
  width: 100%;
  table-layout: fixed;
  background: #f8f9fa;
  border: 1px solid rgba(0, 0, 0, 0);
  border-collapse: collapse;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PrevButton = styled.button<{page: number}>`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => (props.page === 0 ? 'gray' : 'black')};
  cursor: pointer;
`;

export const NextButton = styled.button<{page: number}>`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => (props.page === 11 ? 'gray' : 'black')};
  cursor: pointer;
`;
