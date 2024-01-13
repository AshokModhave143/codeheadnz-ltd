import { render } from '@testing-library/react';

import { AppRoot } from './AppRoot';

describe('AppRoot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppRoot />);
    expect(baseElement).toBeTruthy();
  });
});
