import { render } from '@testing-library/react';
import { HomePage } from '../home-page';

test('matches snapshot', () => {
  const { container } = render(<HomePage />);

  expect(container.outerHTML).toMatchSnapshot();
});
