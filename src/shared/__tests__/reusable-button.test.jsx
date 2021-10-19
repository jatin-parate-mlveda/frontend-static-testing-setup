import { render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { ReUsableButton } from '../reusable-button';

// TODO: use faker library here.
const btnText = 'Something';

test('renders correctly', () => {
  const { getByText } = render(<ReUsableButton text={btnText} />);

  const btn = getByText(btnText);

  expect(btn).not.toBeFalsy();
  expect(btn).toHaveAttribute('type', 'button');
});

test('appends className correctly', () => {
  const className = 'my-btn';

  const { getByText } = render(
    <ReUsableButton text='Something' className={className} />,
  );

  const btn = getByText(btnText);

  expect(btn.classList).toContain(className);
});

test('renders submit btn', () => {
  const { getByText } = render(<ReUsableButton text='Something' isSubmitBtn />);
  const btn = getByText(btnText);

  expect(btn).toHaveAttribute('type', 'submit');
});

test('calls onClick correctly', () => {
  const onClick = jest.fn();
  const { getByText } = render(
    <ReUsableButton text='Something' onClick={onClick} isSubmitBtn />,
  );
  const btn = getByText(btnText);

  fireEvent.click(btn);

  expect(onClick).toBeCalledTimes(1);

  const syntheticEvent = onClick.mock.calls[0][0];

  expect(syntheticEvent).toHaveProperty('type', 'click');
  expect(syntheticEvent).toHaveProperty('target', btn);
});
