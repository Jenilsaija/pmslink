import React, { lazy, Suspense } from 'react';

export async function generateStaticParams() {
  return [
    { pageslug: "Dashboard" },
    { pageslug: "projects" }
  ];
}

const DynamicPage = ({ params }) => {
  // Default to a 404 page if the slug is not found in the map
  const Component = lazy(() => import(`@/module/${params?.pageslug}/index.js`)) || (() => <div>Page Not Found</div>);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default DynamicPage;
