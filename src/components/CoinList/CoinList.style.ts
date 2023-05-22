import styled from '@emotion/styled';

export const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export const TopBar = styled.span`
  display: flex;
  height: 42px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.BORDER};
`;

export const SearchBar = styled.form`
  width: 80%;
  height: 42px;
`;

export const Search = styled.input`
  width: 100%;
  height: 39px;
  ::placeholder {
    color: ${props => props.theme.colors.FONT_SUB};
  }
  ::-webkit-search-cancel-button {
    cursor: pointer;
  }
  color: ${props => props.theme.colors.FONT_MAIN};
  border: none;
  border-right: 1px solid ${props => props.theme.colors.BORDER};
`;

export const SearchButton = styled.button`
  width: 25%;
  height: 41px;
  border: none;
  color: ${props => props.theme.colors.FONT_MAIN};
  background-color: ${props => props.theme.colors.BACKGROUND_MAIN};
  border-right: 1px solid ${props => props.theme.colors.BORDER};
  cursor: pointer;
`;

export const FavoriteButton = styled.button`
  display: none;
`;

export const ToggleSwitch = styled.label<{isFavoriteList: boolean}>`
  width: 20%;
  height: 41px;
  display: flex;
  position: relative;
  background-color: ${props =>
    props.isFavoriteList ? props.theme.colors.BACKGROUND_SUB : props.theme.colors.BACKGROUND_MAIN};
  cursor: pointer;
  &:hover {
    background-color: #f1f1f4;
  }
  transition: all 0.2s ease-in;
`;

export const ToggleButton = styled.span<{isFavoriteList: boolean}>`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgba(0, 0, 0, 0);
  color: ${props => (props.isFavoriteList ? 'gold' : props.theme.colors.FONT_SUB_BOLD)};
  font-size: x-large;
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
