import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export const FavoriteButton = styled.button`
  display: none;
`;

export const ToggleSwitch = styled.label<{isFavorite: boolean}>`
  width: 40px;
  height: 20px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: ${props =>
    props.isFavorite ? props.theme.colors.BACKGROUND_SUB : props.theme.colors.BACKGROUND_MAIN};
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  transition: all 0.2s ease-in;
`;

export const ToggleButton = styled.span<{isFavorite: boolean}>`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${props => (props.isFavorite ? props.theme.colors.BACKGROUND_MAIN : props.theme.colors.BACKGROUND_SUB)};
  ${props =>
    props.isFavorite &&
    css`
      left: calc(100% - 20px);
    `}
  transition: all 0.2s ease-in;
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

export const PrevButton = styled.button<{page: number; firstPage: number}>`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${props =>
    props.page === props.firstPage ? props.theme.colors.BACKGROUND_SUB : props.theme.colors.FONT_MAIN};
  cursor: ${props => (props.page === props.firstPage ? 'default' : 'pointer')};
`;

export const NextButton = styled.button<{page: number; lastPage: number}>`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => (props.page === props.lastPage ? props.theme.colors.BACKGROUND_SUB : props.theme.colors.FONT_MAIN)};
  cursor: ${props => (props.page === props.lastPage ? 'default' : 'pointer')};
`;
