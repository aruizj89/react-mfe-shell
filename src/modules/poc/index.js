import React from 'react';
import { FailedImport } from '../../components/FailedImport';

const POCApp = React.lazy(() =>
  import('POC/App').catch(() => ({ default: () => <FailedImport /> }))
);

export const POC = () => {
  return (
    <React.Suspense fallback="Loading...">
      {POCApp && <POCApp />}
    </React.Suspense>
  );
};
