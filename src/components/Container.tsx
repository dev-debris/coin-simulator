import styled from '@emotion/styled';
import {PropsWithChildren} from 'react';

function Container({children}: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export default Container;
