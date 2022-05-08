import React from 'react';
import { FailedImport } from '../components/FailedImport';
import { LoadingPage } from '../components/LoadingPage';

const PortfolioApp = React.lazy(() =>
  import('PORTFOLIO/App').catch(() => ({ default: () => <FailedImport /> }))
);

export const Portfolio = () => (
  <React.Suspense fallback={<LoadingPage />}>
    {PortfolioApp && <PortfolioApp />}
  </React.Suspense>
);
