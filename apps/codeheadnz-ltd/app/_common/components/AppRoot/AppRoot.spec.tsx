import { render } from '@testing-library/react';

import AppRoot from './AppRoot';
import { AppConfigState } from '@common/redux/appConfigSlice';

describe('AppRoot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AppRoot env={{} as AppConfigState['environmentVariables']} />
    );
    expect(baseElement).toBeTruthy();
  });
});
