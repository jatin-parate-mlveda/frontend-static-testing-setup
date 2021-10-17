import { render } from '@testing-library/react';
import App from '../App';

test('It renders successfully', () => {
  const { container } = render(<App />);
  const eles = container.getElementsByClassName('App');

  expect(eles).toHaveLength(1);
});
