import React from "react";
import { Suspense } from "react";
import ControlledComponent from "./components/ControlledComponent";
import UncontrolledComponent from "./components/UncontrolledComponent";
import Counter from "./components/Counter";
import ErrorBoundary from "./Errors/ErrorBoundary";

// import component here for lazy loading.
const LazyLoadingComp = React.lazy(() => import("./components/LazyLoading"));

// Concepts
// 1- React Forms.
// 2- Controlled Component.
// 3- Uncontrolled Component.
// 4- Lazy Loading and Suspense.
// 5- Error Boundary. ( handling error without affecting other components)
// 6- HOC ( High Order Comopnent)

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>ControlledComponent</h1>
      <ControlledComponent />

      <h1 style={{ textAlign: "center" }}>UncontrolledComponent</h1>
      <UncontrolledComponent />

      <h1 style={{ textAlign: "center" }}>Lazy Loading In react</h1>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      
      <Suspense fallback={<div className="main"><b>Loading Data...</b></div>}>
        <LazyLoadingComp />
      </Suspense>
    </>
  );
}

export default App;
