import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout/Layout';
import { SkeletonTheme } from 'react-loading-skeleton';
import Home from './pages/Home';
import About from'./pages/About';
import Services from'./pages/Services';
import Blogs from'./pages/Blogs';
import BlogDetails from'./pages/BlogDetails';
import Contact from'./pages/Contact';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      staleTime: 5000,
      cacheTime: 180000,      // Cache time is now 3 minutes (180,000 ms) 
      retry: 2,              // Retry the request up to 2 times
      refetchOnWindowFocus: false, // No refetch on window focus
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about-us', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'blogs', element: <Blogs /> },
      { path: 'blog-detail/:id', element: <BlogDetails /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <RouterProvider router={router} />
        </SkeletonTheme>
      </QueryClientProvider>
    </>
  )
}

export default App
