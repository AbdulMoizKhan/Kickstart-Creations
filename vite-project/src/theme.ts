import { ThemeOptions, createTheme } from "@mui/material";

export function responsiveFontSizes({
  xs,
  sm,
  md,
  lg,
}: {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:320px)": {
      fontSize: `${xs}px`,
    },
    "@media (min-width:600px)": {
      fontSize: `${sm}px`,
    },
    "@media (min-width:900px)": {
      fontSize: `${md}px`,
    },
    "@media (min-width:1200px)": {
      fontSize: `${lg}px`,
    },
  };
}

export const theme: ThemeOptions = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },

  typography: {
        fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.5,
      ...responsiveFontSizes({ xs: 12, sm: 16, md: 18, lg: 22 }),
    },
    subtitle2: {
      fontWeight: 400,
      lineHeight: 1.5,
      ...responsiveFontSizes({ xs: 12, sm: 16, md: 18, lg: 20 }),
    },
    h1: {
      fontWeight: 600,
      lineHeight: 1.375,
      ...responsiveFontSizes({ xs: 30, sm: 46, md: 52, lg: 64 }),
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.375,
      ...responsiveFontSizes({ xs: 26, sm: 42, md: 40, lg: 48 }),
    },
    h3: {
      fontWeight: 600,
      lineHeight: 1.375,
      ...responsiveFontSizes({ xs: 26, sm: 42, md: 40, lg: 48 }),
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.375,
      ...responsiveFontSizes({ xs: 20, sm: 24, md: 28, lg: 30 }),
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.375,
    },
  },
});
