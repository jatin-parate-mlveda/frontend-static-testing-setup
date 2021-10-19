import { render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { AddBlog } from '../add-blog';

test('matches snapshot', () => {
  const { container } = render(<AddBlog />);

  expect(container.outerHTML).toMatchSnapshot();
});

test('submits form correctly', () => {
  const onBlogAdd = jest.fn();

  const { getByLabelText } = render(<AddBlog onAdd={onBlogAdd} />);
  const title = 'title'; // TODO: use faker
  const desc = 'description'; // TODO: use faker

  const titleInput = getByLabelText('Title');
  const descInput = getByLabelText('Description');
  const { form } = titleInput;

  fireEvent.type(titleInput, title);
  fireEvent.type(descInput, desc);
  form.submit();

  expect(onBlogAdd).toHaveBeenCalledTimes(1);
  expect(onBlogAdd).toBeCalledWith({ title, desc });
});
