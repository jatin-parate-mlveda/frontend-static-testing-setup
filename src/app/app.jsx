import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { home, blog } from 'constants/routes';
import { BlogDetail } from 'pages/blog-detail';
import { HomePage } from 'pages/home-page';
import { ErrorBoundary } from 'shared/error-boundary';

// import logo from '../assets/images/logo.svg';
import classes from './app.module.scss';

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
          <Route path={blog} component={BlogDetail} />
          <Route path={home} component={HomePage} />
          <Route path='/' exact>
            <Redirect to={home} />
          </Route>
        </Switch>
      </div>
    </ErrorBoundary>
  );
}
