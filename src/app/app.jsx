import { lazy, Suspense } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { home, blog } from 'constants/routes';
import { ErrorBoundary } from 'shared/error-boundary';

// import logo from '../assets/images/logo.svg';
import classes from './app.module.scss';

const BlogDetail = lazy(() =>
  import(/* webpackPrefetch: true */ '../pages/blog-detail/blog-detail').then(
    module => ({
      default: module.BlogDetail,
    }),
  ),
);

const HomePage = lazy(() =>
  import(/* webpackPrefetch: true */ '../pages/home-page/home-page').then(
    module => ({
      default: module.HomePage,
    }),
  ),
);

export function App() {
  return (
    <ErrorBoundary>
      <div className={classes.app}>
        <header className={classes.app__header}>
          <NavLink className={classes.app__link} to={home}>
            Home
          </NavLink>
          <NavLink className={classes.app__link} to={blog}>
            Blog
          </NavLink>
        </header>
        <Switch>
          <Route
            path={blog}
            render={() => (
              <Suspense fallback={<h1>Loading...</h1>}>
                <BlogDetail />
              </Suspense>
            )}
          />
          <Route
            path={home}
            render={() => (
              <Suspense fallback={<h1>Loading...</h1>}>
                <HomePage />
              </Suspense>
            )}
          />
          <Route path='/' exact>
            <Redirect to={home} />
          </Route>
        </Switch>
      </div>
    </ErrorBoundary>
  );
}
