import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';


export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white,
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor,
        },
      ],
    },
  }
};

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];
