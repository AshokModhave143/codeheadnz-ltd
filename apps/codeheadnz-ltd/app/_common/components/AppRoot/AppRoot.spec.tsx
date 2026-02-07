import { render } from '@testing-library/react';

import { AppRoot } from './AppRoot';
import { AppConfigState } from '@common/redux/appConfigSlice';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFn = () => {};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: any) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: emptyFn,
    removeListener: emptyFn,
    addEventListener: emptyFn,
    removeEventListener: emptyFn,
    dispatchEvent: emptyFn,
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
