import React from "react";
import { NavLink } from "./AppShell";
import Link from "next/link";
import {
  Box,
  Button,
  createStyles,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  link: {
    textDecoration: "none",
    display: "block",
    padding: theme.spacing.xs,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[8],
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color:
        theme.colorScheme === "dark"
          ? theme.colors.teal[7]
          : theme.colors.indigo[7],
    },
  },
}));

export const MainLink = ({ label, path }: NavLink) => {
  const { classes } = useStyles();
  return (
    <Link href={path}>
      <a className={classes.link}>
        <Group>
          <Text>{label}</Text>
        </Group>
      </a>
    </Link>
  );
};
