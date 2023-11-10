import React, { Suspense } from 'react';
import './App.css'
import Page1 from './components/Page1'
const LazyPage2 = React.lazy(() => import('./components/Page2'));

function App() {

  return (
    <>
      <Page1 />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPage2 />
      </Suspense>
    </>
  )
}

export default App
