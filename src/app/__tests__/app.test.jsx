import { render } from '@testing-library/react';
import { blog } from 'constants/routes';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../app';
import classes from '../app.module.scss';
import { waitFor2Sec } from '../../../test/utils/wait-for-2sec';

test('It renders loading state successfully', async () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const eles = container.getElementsByClassName(classes.app);

  expect(eles).toHaveLength(1);

  expect(container.outerHTML).toMatchSnapshot();
});

test('It renders successfully', async () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  await waitFor2Sec();

  const eles = container.getElementsByClassName(classes.app);

  expect(eles).toHaveLength(1);

  expect(container.outerHTML).toMatchSnapshot();
});

test('It renders blogs page loading state', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={[{ pathname: blog }]}>
      <App />
    </MemoryRouter>,
  );

  expect(container.outerHTML).toMatchSnapshot();
});

test('It renders blogs page successfully', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={[{ pathname: blog }]}>
      <App />
    </MemoryRouter>,
  );

  await waitFor2Sec();

  const eles = container.getElementsByClassName(classes.app);

  expect(eles).toHaveLength(1);

  expect(container.outerHTML).toMatchSnapshot();
});
