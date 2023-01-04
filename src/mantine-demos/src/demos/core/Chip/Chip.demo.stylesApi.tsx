import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Chip, createStyles, getStylesRef, Group } from '@mantine/core';

const code = `
import { createStyles, Chip, getStylesRef, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  label: {
    '&[data-checked]': {
      '&, &:hover': {
        backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
        color: theme.white,
      },

      [\`& .\${getStylesRef('iconWrapper')}\`]: {
        color: theme.white,
      },
    },
  },

  iconWrapper: {
    ref: getStylesRef('iconWrapper'),
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <Chip.Group multiple defaultValue={['react']}>
      <Group position="center">
        <Chip classNames={classes} value="react">
          React
        </Chip>
        <Chip classNames={classes} value="ng">
          Angular
        </Chip>
        <Chip classNames={classes} value="vue">
          Vue
        </Chip>
        <Chip classNames={classes} value="svelte">
          Svelte
        </Chip>
      </Group>
    </Chip.Group>
  );
}
`;

const useStyles = createStyles((theme) => ({
  label: {
    '&[data-checked]': {
      '&, &:hover': {
        backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
        color: theme.white,
      },

      [`& .${getStylesRef('iconWrapper')}`]: {
        color: theme.white,
      },
    },
  },

  iconWrapper: {
    ref: getStylesRef('iconWrapper'),
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <Chip.Group multiple defaultValue={['react']}>
      <Group position="center">
        <Chip classNames={classes} value="react">
          React
        </Chip>
        <Chip classNames={classes} value="ng">
          Angular
        </Chip>
        <Chip classNames={classes} value="vue">
          Vue
        </Chip>
        <Chip classNames={classes} value="svelte">
          Svelte
        </Chip>
      </Group>
    </Chip.Group>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
