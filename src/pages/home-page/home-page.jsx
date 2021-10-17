import { AddBlog, BlogList } from 'features/blog';
import classes from './home-page.module.scss';

export const HomePage = () => (
  <div className={classes.container}>
    <AddBlog />
    <div>
      <BlogList />
    </div>
  </div>
);
