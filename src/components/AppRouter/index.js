import React from 'react';
import { useRoutes } from 'react-router-dom';
import { POC } from '../../modules/poc';

export const AppRouter = () => {
  const routes = useRoutes([
    { element: <POC />, path: 'proof-of-concept' },
    { element: <></>, path: '*' },
  ]);

  return routes;
};
