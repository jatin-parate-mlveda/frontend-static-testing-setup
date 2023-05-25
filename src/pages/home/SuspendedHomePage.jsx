import { lazy, Suspense } from 'react';
import { Loading } from '../../components';

const HomePage = lazy(() =>
  import('./index').then(m => ({
    default: m.HomePage,
  })),
);

export default function SuspendedHomePage(props) {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage {...props} />
    </Suspense>
  );
}
