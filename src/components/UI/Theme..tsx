import { createTheme } from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { FC } from 'react';

const defaultTheme = createTheme();

export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontSize: 12.5,
    fontWeightMedium: 600,
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: '2.7em',
      paddingTop: '1.5em',
      paddingBottom: '0.67em',
      fontWeight: defaultTheme.typography.fontWeightRegular,
    },
    h2: {
      fontSize: '2em',
      paddingBottom: '0.9em',
      fontWeight: defaultTheme.typography.fontWeightRegular,
    },
    h3: {
      fontSize: '1.5em',
      paddingBottom: '0.89em',
      fontWeight: defaultTheme.typography.fontWeightBold,
    },
    h4: {
      fontSize: '1.25em',
      paddingBottom: '0.8em',
      fontWeight: defaultTheme.typography.fontWeightBold,
    },
    h5: {
      fontSize: '1.1em',
      paddingBottom: '0.7em',
      fontWeight: defaultTheme.typography.fontWeightBold,
    },
  },
});

const emotionCache = createCache({
  key: 'a',
  prepend: true,
});

let StyleProvider: FC = (props) => (
  <CacheProvider value={emotionCache}>{props.children}</CacheProvider>
);

export default StyleProvider;
