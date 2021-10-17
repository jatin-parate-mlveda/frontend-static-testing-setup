import { useState } from 'react';
import { ReUsableButton } from 'shared';

export const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor='title'>
          Title
          <input
            name='title'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor='desc'>
          Description
          <input
            name='desc'
            id='desc'
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </label>
      </div>
      <div>
        <ReUsableButton isSubmitBtn text='Submit' type='submit' />
      </div>
    </form>
  );
};
