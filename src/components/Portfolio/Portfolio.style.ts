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

export const SubTitle = styled.h3`
  width: 50%;
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.FONT_MAIN};
`;

export const Header = styled.header<{identifier?: string}>`
  ${({identifier}) => {
    switch (identifier) {
      case 'coinListItem': {
        return {
          padding: '8px 20px',
          display: 'flex',
          alignItems: 'center',
        };
      }
    }
  }}
`;

export const DescriptionList = styled.dl<{identifier?: string}>`
  ${({
    identifier,
    theme: {
      colors: {FONT_MAIN, BACKGROUND_SUB},
    },
  }) => {
    switch (identifier) {
      case 'coinListItemHeader': {
        return {
          width: '50%',
          fontSize: '12px',
          color: FONT_MAIN,
          display: 'flex',
          flexDirection: 'column',
        };
      }

      case 'coinListItemBody': {
        return {
          padding: '12px 20px',
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: '10px',
            width: 'calc(100% - 20px)',
            height: '1px',
            backgroundColor: BACKGROUND_SUB,
          },
        };
      }
    }
  }}
`;

export const DescriptionListItem = styled.div<{identifier?: string}>`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 4px;
  }

  ${({identifier}) => {
    switch (identifier) {
      case 'header': {
        return {
          alignItems: 'baseline',
          padding: '0 20px',
        };
      }

      case 'coinListItemBody': {
        return {
          justifyContent: 'flex-start',

          '& + &': {
            marginTop: '8px',
          },
        };
      }
    }
  }}
`;

export const DescriptionListSubItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const DescriptionTerm = styled.dt<{identifier?: string}>`
  ${({
    identifier,
    theme: {
      colors: {FONT_SUB, FONT_SUB_BOLD},
    },
  }) => {
    switch (identifier) {
      case 'header': {
        return {
          color: FONT_SUB_BOLD,
          fontSize: '14px',
        };
      }

      case 'coinListItemBody': {
        return {
          color: FONT_SUB,
          fontSize: '11px',
        };
      }
    }
  }}
`;

export const DescriptionDetails = styled.dd<{identifier?: string; value?: number}>`
  ${({
    identifier,
    value,
    theme: {
      colors: {RISE, FONT_MAIN, FALL},
    },
  }) => {
    switch (identifier) {
      case 'header': {
        return {
          color: FONT_MAIN,
          fontSize: '20px',
          fontWeight: 'bold',
        };
      }

      case 'coinListItemHeader': {
        value = value || 0;

        return {
          color: value > 0 ? RISE : value === 0 ? FONT_MAIN : FALL,
        };
      }

      case 'coinListItemBody': {
        return {
          fontSize: '14px',
        };
      }
    }
  }}
`;

export const Unit = styled.i<{identifier?: string}>`
  ${({
    identifier,
    theme: {
      colors: {FONT_SUB, FONT_MAIN_BOLD},
    },
  }) => {
    switch (identifier) {
      case 'header': {
        return {
          color: FONT_SUB,
          fontSize: '11px',
        };
      }

      case 'coinListItemBody': {
        return {
          color: FONT_MAIN_BOLD,
          fontSize: '12px',
          fontWeight: 'bold',
        };
      }
    }
  }}
`;

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  list-style: none;
`;

export const ListItem = styled.li`
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
