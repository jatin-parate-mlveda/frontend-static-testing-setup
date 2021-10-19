import { render } from '@testing-library/react';
import { BlogDetail } from '../blog-detail';

test('matches snapshot', () => {
  const { container } = render(<BlogDetail />);

  expect(container.outerHTML).toMatchSnapshot();
});
