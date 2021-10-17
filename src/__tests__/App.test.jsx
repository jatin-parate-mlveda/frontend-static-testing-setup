import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(() => {
  cleanup();
});

test('It renders successfully', () => {
  const { container } = render(<App />);
  const eles = container.getElementsByClassName('App');

  expect(eles).toHaveLength(1);
});
