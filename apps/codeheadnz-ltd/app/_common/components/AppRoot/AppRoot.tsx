'use client';

import {} from 'react';
import { store } from '@redux/store';
import { AppConfigState } from '@common/redux/appConfigSlice';
import {
  AppConfigProvider,
  AppNextUiProvider,
  AppNextUiThemeProvider,
} from '../Providers';
import { StyledComponentsRegistry } from '../StyledComponentsRegistry';
import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Header } from '../Header';
import { Footer } from '../Footer';

export interface AppRootProps extends PropsWithChildren {
  env: AppConfigState['environmentVariables'];
}

export default function AppRoot({ env, children }: AppRootProps) {
  return (
    <StyledComponentsRegistry>
      <ReduxProvider store={store}>
        <AppConfigProvider env={env}>
          <AppNextUiProvider>
            <AppNextUiThemeProvider>
              <div className="relative flex flex-col h-screen">
                <Header />
                <main className="container mx-auto max-w-7xl flex flex-col flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
            </AppNextUiThemeProvider>
          </AppNextUiProvider>
        </AppConfigProvider>
      </ReduxProvider>
    </StyledComponentsRegistry>
  );
}
