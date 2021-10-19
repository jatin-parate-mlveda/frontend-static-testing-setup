import { render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { ErrorBoundary } from '../error-boundary';

beforeEach(() => {
  jest.spyOn(window, 'fetch');
});

afterEach(() => {
  window.fetch.mockRestore();
});

test('renders child', () => {
  const { container } = render(
    <ErrorBoundary>
      <h1>Hello, world!</h1>
    </ErrorBoundary>,
  );

  console.warn(container.innerHTML);

  expect(container.outerHTML).toMatchSnapshot();
});

const ErrorThrowingComponent = () => {
  throw Error('Something');
};

test('renders error boundary correctly', () => {
  const { container } = render(
    <ErrorBoundary>
      <ErrorThrowingComponent />
    </ErrorBoundary>,
  );

  expect(container.outerHTML).toMatchSnapshot();

  expect(window.fetch).toBeCalledTimes(1);
});

test('reset button works properly', () => {
  const { getByText } = render(
    <ErrorBoundary>
      <ErrorThrowingComponent />
    </ErrorBoundary>,
  );

  const btn = getByText('Refresh page');
  const { origin } = window;

  expect(btn).not.toBeFalsy();
  fireEvent.click(btn);

  expect(window.location.toString()).toEqual(`${origin}/`);
});
