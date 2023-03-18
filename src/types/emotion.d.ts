import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      BACKGROUND_MAIN: string;
      BACKGROUND_SUB: string;
      FONT_MAIN: string;
      FONT_MAIN_BOLD: string;
      FONT_SUB: string;
      FONT_SUB_BOLD: string;
      BORDER: string;
      RISE: string;
      FALL: string;
    };
  }
}
