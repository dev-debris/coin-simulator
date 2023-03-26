import styled from '@emotion/styled';

export const Wrapper = styled.section`
  flex: 1 1 auto;
  background-color: #fff;
  padding: 20px 0;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const SubTitle = styled.h3`
  width: 50%;
  font-size: 12px;
  font-weight: bold;
  color: #333;
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
  ${({identifier}) => {
    switch (identifier) {
      case 'coinListItemHeader': {
        return {
          width: '50%',
          fontSize: '12px',
          color: '#333',
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
            backgroundColor: '#f1f1f4',
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
  ${({identifier}) => {
    switch (identifier) {
      case 'header': {
        return {
          color: '#666',
          fontSize: '14px',
        };
      }

      case 'coinListItemBody': {
        return {
          color: '#999',
          fontSize: '11px',
        };
      }
    }
  }}
`;

export const DescriptionDetails = styled.dd<{identifier?: string; value?: number}>`
  ${({identifier, value}) => {
    switch (identifier) {
      case 'header': {
        return {
          color: '#333',
          fontSize: '20px',
          fontWeight: 'bold',
        };
      }

      case 'coinListItemHeader': {
        value = value || 0;

        return {
          color: value > 0 ? 'red' : value === 0 ? '#333' : 'blue',
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
  ${({identifier}) => {
    switch (identifier) {
      case 'header': {
        return {
          color: '#999',
          fontSize: '11px',
        };
      }

      case 'coinListItemBody': {
        return {
          color: '#000',
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
  border-top: 1px solid #ddd;

  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`;
