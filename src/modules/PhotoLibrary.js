import React from 'react';
import { FailedImport } from '../components/FailedImport';
import { LoadingPage } from '../components/LoadingPage';

const PhotoLibraryMFE = React.lazy(() =>
  import('PhotoLibrary/App').catch(() => ({
    default: () => <FailedImport />,
  }))
);

export const PhotoLibrary = () => (
  <React.Suspense fallback={<LoadingPage />}>
    <PhotoLibraryMFE />
  </React.Suspense>
);
