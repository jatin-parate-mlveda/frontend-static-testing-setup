import { Route, Routes, NavLink } from 'react-router-dom';
import { ErrorBoundary } from 'components/ErrorBoundary';
import classes from './App.module.scss';
import SuspendedBlogDetail from './pages/blog-detail/SuspendedBlogDetail';
import SuspendedHomePage from './pages/home/SuspendedHomePage';

export default function App() {
  return (
    <ErrorBoundary>
      <div className={classes.app}>
        <header className={classes.app__header}>
          <NavLink className={classes.app__link} to='/'>
            Home
          </NavLink>
          <NavLink className={classes.app__link} to='/blog-detail'>
            Blog
          </NavLink>
        </header>
        <Routes>
          <Route path='/blog-detail' element={<SuspendedBlogDetail />} />
          <Route index element={<SuspendedHomePage />} />
          <Route path='*' element={<h1>Page not found!</h1>} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}
