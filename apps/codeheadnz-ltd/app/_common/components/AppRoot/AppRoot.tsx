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
                <div className="relative flex flex-col h-screen w-screen bg-background text-foreground">
                  <header className="h-20">
                    <Header />
                  </header>
                  <main className="container-none mx-auto h-auto flex-grow scroll-auto">
                    {children}
                  </main>
                  <footer className="p-4 text-white bottom-2">
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
