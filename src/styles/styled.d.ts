declare module "styled components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      accent: string;
      degraded: string;
    };
    typography: {
      mainFontFamily: string;
    };
  }
}
