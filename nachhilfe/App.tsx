import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

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
    <NativeBaseProvider theme={theme}>
      <Center
        _dark={{ bg: "primary_dark.100" }}
        _light={{ bg: "primary_light.100" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              _web={{
                _text: {
                  fontFamily: "monospace",
                  fontSize: "sm",
                },
              }}
              px={2}
              py={1}
              _dark={{ bg: "primary_dark.100"  }}
              _light={{ bg: "primary_light.100" }}
            >
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text
              _dark={{ color: "primary_light.100"  }}
              _light={{ color: "primary_dark.100" }}
              underline fontSize={"xl"}
            >
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
