import React from "react";
import { Suspense } from "react";
import ControlledComponent from "./components/ControlledComponent";
import UncontrolledComponent from "./components/UncontrolledComponent";
import Counter from "./components/Counter";
import ErrorBoundary from "./Errors/ErrorBoundary";
import Person1 from "./components/Person1";
import Person2 from "./components/Person2";
import HighOrderComponent from "./components/HighOrderComponent";




// import component here for lazy loading.
const LazyLoadingComp = React.lazy(() => import("./components/LazyLoading"));

// Concepts
// 1- React Forms.
// 2- Controlled Component.
// 3- Uncontrolled Component.
// 4- Lazy Loading and Suspense.
// 5- Error Boundary. ( handling error without affecting other components)
// 6- HOC ( High Order Comopnent)

// Wrap Person1 and Person2 with HighOrderComponent
const Person1Enhanced = HighOrderComponent(Person1);
const Person2Enhanced = HighOrderComponent(Person2);

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white", backgroundColor: "gray" }}>ControlledComponent</h1>
      <ControlledComponent />

      <h1 style={{ textAlign: "center", color: "white", backgroundColor: "gray" }}>UncontrolledComponent</h1>
      <UncontrolledComponent />

      <h1 style={{ textAlign: "center", color: "white", backgroundColor: "gray" }}>HOC</h1>
      <Person1Enhanced />
      <Person2Enhanced />

      <h1 style={{ textAlign: "center", color: "white", backgroundColor: "gray" }}>Lazy Loading In react</h1>
      <Suspense fallback={<div className="main"><b>Loading Data...</b></div>}>
        <LazyLoadingComp />
      </Suspense>

      <h1 style={{ textAlign: "center", color: "white", backgroundColor: "gray" }}>Error Boundries</h1>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </>
  );
}

export default App;
