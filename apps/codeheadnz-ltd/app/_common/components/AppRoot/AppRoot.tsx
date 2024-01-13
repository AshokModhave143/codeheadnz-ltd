'use client';

import { AppNextUiProvider } from '../Providers';
import { AppNextUiThemeProvider } from '../Providers/AppNextUiThemeProvider';
import { StyledComponentsRegistry } from '../StyledComponentsRegistry';
import { PropsWithChildren } from 'react';

export interface AppRootProps extends PropsWithChildren {}

export const AppRoot = ({ children }: AppRootProps) => {
  return (
    <AppNextUiProvider>
      <AppNextUiThemeProvider>
        <StyledComponentsRegistry>
          <main className="h-[100vh] w-[100vw] text-foreground bg-background">
            {children}
          </main>
        </StyledComponentsRegistry>
      </AppNextUiThemeProvider>
    </AppNextUiProvider>
  );
};
