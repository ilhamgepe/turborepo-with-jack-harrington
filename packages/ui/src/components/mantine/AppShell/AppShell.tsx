import {
  AppShell as MantineAppShell,
  Box,
  Burger,
  ColorScheme,
  ColorSchemeProvider,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { ToggleColorScheme } from "../Button/ToogleColorScheme";
import { MainLink } from "./MainLink";
import { useStore } from "store";

export type AppShellProps = {
  title: string;
  children: JSX.Element;
  navLinks: NavLink[];
};

export type NavLink = {
  label: string;
  path: string;
};

export const AppShell = ({ title, children, navLinks }: AppShellProps) => {
  const movies = useStore((state) => state.movies);

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "purwantara-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <MantineAppShell
          header={
            <Header height={60} p="md">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o: any) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>

                  <Text size={26} weight="normal">
                    {title}
                  </Text>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <ToggleColorScheme />
                  <Text size={"xl"}>{movies.length} selected</Text>
                </Box>
              </div>
            </Header>
          }
          navbar={
            <Navbar
              p="xs"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 200, lg: 300 }}
            >
              {navLinks.map((nl) => (
                <MainLink {...nl} key={nl.path} />
              ))}
            </Navbar>
          }
        >
          {children}
        </MantineAppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

// export default AppShell;
