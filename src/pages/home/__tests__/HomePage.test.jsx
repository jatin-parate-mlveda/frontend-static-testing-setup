import { render } from '@testing-library/react';
import { HomePage } from '../HomePage';

test('matches snapshot', () => {
  const { container } = render(<HomePage />);

  expect(container.outerHTML).toMatchSnapshot();
});
