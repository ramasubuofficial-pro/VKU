/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogDetails = lazy(() => import('../pages/BlogDetails'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/errors/NotFound'));

export const routes = {
  public: [
    // We move everything to main layout for the corporate site
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/services', element: <Services /> },
    { path: '/blog', element: <Blog /> },
    { path: '/blog/:slug', element: <BlogDetails /> },
    { path: '/contact', element: <Contact /> },
  ],
  protected: [], // Not used for this corporate site
  fallback: [
    { path: '*', element: <NotFound /> }
  ]
};
