import {css, Global} from '@emotion/react';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
        }

        body {
          background-color: #fafafa;
        }

        #__next {
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  );
}

export default GlobalStyle;
