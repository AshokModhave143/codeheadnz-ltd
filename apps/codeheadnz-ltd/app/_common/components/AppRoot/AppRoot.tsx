'use client';

import {} from 'react';
import { store } from '@redux/store';
import { AppConfigState } from '@common/redux/appConfigSlice';
import {
  // AppConfigProvider,
  AppNextUiProvider,
  AppNextUiThemeProvider,
} from '../Providers';
import { StyledComponentsRegistry } from '../StyledComponentsRegistry';
import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Header } from '../Header';
import { Footer } from '../Footer';
import ErrorBoundary from '@app/error';

export interface AppRootProps extends PropsWithChildren {
  env: AppConfigState['environmentVariables'];
}

export default function AppRoot({ env, children }: AppRootProps) {
  return (
    <StyledComponentsRegistry>
      <ReduxProvider store={store}>
        {/* <AppConfigProvider env={env}> */}
        <AppNextUiProvider>
          <AppNextUiThemeProvider>
            <main className="h-[100vh] w-[100vw] text-foreground bg-background">
              <Header />
              <ErrorBoundary>
                <div className="flex flex-col">{children}</div>
              </ErrorBoundary>
              <Footer />
            </main>
          </AppNextUiThemeProvider>
        </AppNextUiProvider>
        {/* </AppConfigProvider> */}
      </ReduxProvider>
    </StyledComponentsRegistry>
  );
}
