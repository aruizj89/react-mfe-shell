import React from 'react';
import { FailedImport } from '../components/FailedImport';
import { LoadingPage } from '../components/LoadingPage';

const POCApp = React.lazy(() =>
  import('POC/App').catch(() => ({ default: () => <FailedImport /> }))
);

export const ProofOfConcept = () => (
  <React.Suspense fallback={<LoadingPage />}>
    {POCApp && <POCApp />}
  </React.Suspense>
);
