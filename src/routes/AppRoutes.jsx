import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import BlankLayout from '../layouts/BlankLayout';
import { routes } from './routeConfig';
import { Loader2 } from 'lucide-react';

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Loader2 className="w-8 h-8 animate-spin text-vku-primary" />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Main Website Routes (Main Layout) */}
        <Route element={<MainLayout />}>
          {routes.public.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        {/* Fallback Routes (Blank Layout) */}
        <Route element={<BlankLayout />}>
          {routes.fallback.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
