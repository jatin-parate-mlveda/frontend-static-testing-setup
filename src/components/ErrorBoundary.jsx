import { Component } from 'react';
import { ReusableButton } from './ReusableButton';
import classes from './ErrorBoundary.module.scss';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // send error to server
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });
    fetch(`${process.env.REACT_APP_SERVER_URL}/frontend-error`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: {
          stack: error.stack,
          name: error.name,
          message: error.message,
        },
        errorInfo,
        location: window.location.toString(),
      }),
    });
  }

  refreshPage = () => {
    window.location = window.origin;
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={classes.container}>
          <h1>Something went wrong!</h1>
          <ReusableButton text='Refresh page' onClick={this.refreshPage} />
        </div>
      );
    }

    return children;
  }
}
