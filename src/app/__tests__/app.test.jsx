import { render } from '@testing-library/react';
import { blog } from 'constants/routes';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../app';
import classes from '../app.module.scss';

test('It renders successfully', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const eles = container.getElementsByClassName(classes.app);

  expect(eles).toHaveLength(1);

  expect(container.outerHTML).toMatchSnapshot();
});

test('It renders blogs page successfully', () => {
  const { container } = render(
    <MemoryRouter initialEntries={[{ pathname: blog }]}>
      <App />
    </MemoryRouter>,
  );

  const eles = container.getElementsByClassName(classes.app);

  expect(eles).toHaveLength(1);

  expect(container.outerHTML).toMatchSnapshot();
});
