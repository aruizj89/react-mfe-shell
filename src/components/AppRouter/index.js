import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Portfolio, ProofOfConcept } from '../../modules';

export const AppRouter = () => {
  const routes = useRoutes([
    { element: <Portfolio />, path: '' },
    { element: <ProofOfConcept />, path: 'proof-of-concept' },
    { element: <></>, path: '*' },
  ]);

  return routes;
};
