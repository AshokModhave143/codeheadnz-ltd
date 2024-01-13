'use client';

import { ThemeProvider, useTheme } from 'next-themes';

export const AppNextUiThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider attribute="class" defaultTheme={theme}>
      {children}
    </ThemeProvider>
  );
};
