import { render } from '@testing-library/react';
import { BlogList } from '../blog-list';

test('matches snapshot', () => {
  const { container } = render(<BlogList />);

  expect(container.outerHTML).toMatchSnapshot();
});
