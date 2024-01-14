'use client';

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
              <main className="h-[100vh] w-[100vw] text-foreground bg-background">
                <Header />
                <div className="flex flex-col">{children}</div>
                <Footer />
              </main>
            </AppNextUiThemeProvider>
          </AppNextUiProvider>
        </AppConfigProvider>
      </ReduxProvider>
    </StyledComponentsRegistry>
  );
}
