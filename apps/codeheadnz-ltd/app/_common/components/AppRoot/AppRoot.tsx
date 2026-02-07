'use client';

import { store } from '@redux/store';
import { AppConfigState } from '@common/redux/appConfigSlice';
import {
  AppConfigProvider,
  AppHeroUiProvider,
  AppNextUiThemeProvider,
  NextAuthSessionProvider,
} from '../Providers';
import { StyledComponentsRegistry } from '../StyledComponentsRegistry';
import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Header } from '../Header';
import { Footer } from '../Footer';

export interface AppRootProps extends PropsWithChildren {
  env: AppConfigState['environmentVariables'];
}

export const AppRoot = ({ env, children }: AppRootProps) => {
  return (
    <StyledComponentsRegistry>
      <ReduxProvider store={store}>
        <AppConfigProvider env={env}>
          <NextAuthSessionProvider>
            <AppHeroUiProvider>
              <AppNextUiThemeProvider>
                <div className="relative flex min-h-dvh w-full flex-col bg-background text-foreground">
                  <Header />
                  <main className="flex-1 w-full">{children}</main>
                  <footer className="mt-auto w-full">
                    <Footer />
                  </footer>
                </div>
              </AppNextUiThemeProvider>
            </AppHeroUiProvider>
          </NextAuthSessionProvider>
        </AppConfigProvider>
      </ReduxProvider>
    </StyledComponentsRegistry>
  );
};
