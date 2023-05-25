import { lazy, Suspense } from 'react';
import { Loading } from '../../components';

const BlogDetailPage = lazy(() =>
  import('./index').then(m => ({
    default: m.BlogDetail,
  })),
);

export default function SuspendedBlogDetail(props) {
  return (
    <Suspense fallback={<Loading />}>
      <BlogDetailPage {...props} />
    </Suspense>
  );
}
