import { render } from '@testing-library/react';

import AppRoot from './AppRoot';
import { AppConfigState } from '@common/redux/appConfigSlice';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: any) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

describe('AppRoot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AppRoot env={{} as AppConfigState['environmentVariables']}>
        <div>AppRoot</div>
      </AppRoot>
    );
    expect(baseElement).toBeTruthy();
  });
});
