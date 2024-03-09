import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import React, { Suspense } from 'react';
const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <header className='fixed flex h-10 w-full gap-2 bg-white p-2'>
        <Link to='/' className='[&.active]:font-bold [&.active]:text-blue-300'>
          Home
        </Link>
        <Link to='/playground' className='[&.active]:font-bold [&.active]:text-blue-300 '>
          Playground
        </Link>
      </header>
      <main className='h-full w-full pt-10'>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </Suspense>
  )
});
