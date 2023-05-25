import { render } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import BlogTitle from '../BlogTitle';

test('renders title correctly', async () => {
  const title = faker.string.sample(10);
  const { findByText } = render(<BlogTitle title={title} />);

  expect(await findByText(title)).not.toBeFalsy();
});
