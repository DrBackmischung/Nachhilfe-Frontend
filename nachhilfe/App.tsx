import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import {Root} from "./src/components/RootComponent";
import config from './nativebase.config';

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {

  const theme = extendTheme({
    colors: {
      primary: {
        100: '#4E4296'
      },
      primary_dark: {
        100: '#0A0436'
      },
      primary_light: {
        100: '#857BC3'
      },
      secondary: {
        100: '#3A126A'
      },
      secondary_dark: {
        100: '#190234'
      },
      secondary_light: {
        100: '#9775C0'
      },
      tertiary: {
        100: '#133068'
      },
      tertiary_dark: {
        100: '#031334'
      },
      tertiary_light: {
        100: '#758EBE'
      },
      white: {
        100: '#FFFFFF'
      },
      grey: {
        100: '#C0C0C0'
      },
      black: {
        100: '#000000'
      },
    },
    config: {
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Root />
    </NativeBaseProvider>
  );
}
